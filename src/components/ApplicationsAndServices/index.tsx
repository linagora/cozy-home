import {
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates
} from '@dnd-kit/sortable'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import flag from 'cozy-flags'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

import { HomeItemContent } from './HomeItemContent'
import { SEPARATOR_SOURCE_ID, SeparatorSource } from './SeparatorSource'
import { SortableTile } from './SortableTile'
import {
  VisualRow,
  buildSeparatorItems,
  computeRowSnappedOrder,
  isSeparatorId,
  makeSeparatorId,
  orderItems
} from './homeItems'
import { useHomeLayout } from './useHomeLayout'

import AddTile from '@/components/AddTile'
import AppHighlightAlertWrapper from '@/components/AppHighlightAlert/AppHighlightAlertWrapper'
import { LoadingAppTiles as UntypedLoadingAppTiles } from '@/components/Applications'
import AssistantTile from '@/components/AssistantTile'
import LogoutTile from '@/components/LogoutTile'

const LoadingAppTiles = UntypedLoadingAppTiles as React.FC<{ num: number }>

const noop = (): void => undefined

type MeasuredRow = VisualRow & { top: number; bottom: number }

// Reads the current visual rows of the icon tiles (separators excluded) from
// the DOM: one entry per distinct row top, anchored on the leftmost tile.
const getVisualRows = (excludeId: string): MeasuredRow[] => {
  const tiles = Array.from(
    document.querySelectorAll<HTMLElement>('.home-item[data-id]')
  ).filter(
    el =>
      el.dataset.id !== excludeId &&
      !el.classList.contains('home-item--separator')
  )

  const rowsByTop = new Map<
    number,
    { firstId: string; firstLeft: number; height: number }
  >()
  tiles.forEach(el => {
    const rect = el.getBoundingClientRect()
    const top = Math.round(rect.top)
    const id = el.dataset.id ?? ''
    const existing = rowsByTop.get(top)
    if (!existing) {
      rowsByTop.set(top, {
        firstId: id,
        firstLeft: rect.left,
        height: rect.height
      })
    } else if (rect.left < existing.firstLeft) {
      existing.firstId = id
      existing.firstLeft = rect.left
    }
  })

  return Array.from(rowsByTop.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([top, row]) => ({
      firstId: row.firstId,
      centerY: top + row.height / 2,
      top,
      bottom: top + row.height
    }))
}

// Vertical center of the dragged item in viewport coordinates, used to decide
// which row boundary a separator snaps to
const getDragCenterY = (active: DragEndEvent['active']): number => {
  const rect = active.rect.current.translated
  return rect ? rect.top + rect.height / 2 : 0
}

// Viewport Y of the row boundary where a separator would snap, given the
// pointer position. Mirrors computeRowSnappedOrder so the ghost matches the
// actual drop.
const computeSnapBoundaryY = (
  rows: MeasuredRow[],
  pointerY: number
): number => {
  let rowsAbove = 0
  while (rowsAbove < rows.length && rows[rowsAbove].centerY < pointerY) {
    rowsAbove++
  }
  return rowsAbove >= rows.length
    ? rows[rows.length - 1].bottom
    : rows[rowsAbove].top
}

// Insert based on the icon actually under the pointer rather than on the
// dragged item's center. A full-width separator's center always sits in the
// middle of the grid, so closestCenter would snap it to the middle of a row,
// making the first/top position unreachable and only moving a few icons.
// Falling back to closestCenter keeps reordering working over empty gaps.
const collisionDetection: CollisionDetection = args => {
  const pointerCollisions = pointerWithin(args)
  return pointerCollisions.length > 0 ? pointerCollisions : closestCenter(args)
}

export const ApplicationsAndServices = (): JSX.Element => {
  const showLogout = Boolean(flag('home.mainlist.show-logout'))
  const { isMobile } = useBreakpoints()

  const {
    hasLoaded,
    isAppsLoading,
    liveItems,
    order,
    separators,
    apps,
    saveOrder,
    addSeparator,
    renameSeparator,
    removeSeparator
  } = useHomeLayout()

  const [activeId, setActiveId] = useState<string | null>(null)
  // Optimistic order, applied on drop and dropped once settings catch up
  const [localOrder, setLocalOrder] = useState<string[] | null>(null)
  // Source of truth for the order during an active drag, kept in sync with
  // localOrder. onDragEnd reads this instead of the localOrder state, which
  // may still hold the value from before the last onDragOver committed, so the
  // position actually dropped is the one persisted.
  const dragOrderRef = useRef<string[] | null>(null)
  // Y (relative to the grid) where the ghost preview line is drawn while
  // dragging a separator; null when not previewing
  const [previewY, setPreviewY] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [lastSavedOrder, setLastSavedOrder] = useState(order)

  if (lastSavedOrder !== order) {
    setLastSavedOrder(order)
    setLocalOrder(null)
  }

  const effectiveOrder = localOrder ?? order

  const items = useMemo(
    () =>
      orderItems(effectiveOrder, [
        ...liveItems,
        ...buildSeparatorItems(effectiveOrder, separators)
      ]),
    [effectiveOrder, liveItems, separators]
  )

  const ids = useMemo(() => items.map(item => item.id), [items])

  // Derived from the rendered list (items), not liveItems: the highlight
  // alert positions itself by the app's index in this array, which must match
  // the actual on-screen order after the user reorders tiles
  const appsForAlerts = useMemo(
    () => items.flatMap(item => (item.type === 'app' ? [item.app] : [])),
    [items]
  )

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 500, tolerance: 8 }
    }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const handleDragStart = ({ active }: DragStartEvent): void => {
    setActiveId(String(active.id))
    // Freeze the current visible order as the editable base for live reorder
    dragOrderRef.current = ids
    setLocalOrder(ids)
  }

  const handleDragCancel = (): void => {
    setActiveId(null)
    dragOrderRef.current = null
    setLocalOrder(null)
    setPreviewY(null)
  }

  // While dragging a separator, draw a ghost line at the row boundary where it
  // would land. Tiles don't get a ghost (they reorder live instead).
  const handleDragMove = ({ active }: DragMoveEvent): void => {
    const id = String(active.id)
    if (id !== SEPARATOR_SOURCE_ID && !isSeparatorId(id)) return

    const rows = getVisualRows(id)
    if (rows.length === 0) {
      setPreviewY(null)
      return
    }
    const boundaryY = computeSnapBoundaryY(rows, getDragCenterY(active))
    const gridTop = gridRef.current?.getBoundingClientRect().top ?? 0
    setPreviewY(boundaryY - gridTop)
  }

  // Tiles reorder for real as the pointer moves over them (the browser
  // relayouts the grid, so they make room without jumping rows). Separators
  // are NOT reordered live: they snap to a whole-row boundary on drop, so
  // dragging one moves entire rows rather than shuffling icons.
  const handleDragOver = ({ active, over }: DragOverEvent): void => {
    if (!over || active.id === over.id) return
    const id = String(active.id)
    if (id === SEPARATOR_SOURCE_ID || isSeparatorId(id)) return

    const base = dragOrderRef.current ?? ids
    const from = base.indexOf(id)
    const to = base.indexOf(String(over.id))
    if (from === -1 || to === -1) return
    const newOrder = arrayMove(base, from, to)
    dragOrderRef.current = newOrder
    setLocalOrder(newOrder)
  }

  const handleDragEnd = ({ active }: DragEndEvent): void => {
    setActiveId(null)
    setPreviewY(null)
    const base = dragOrderRef.current ?? ids
    const activeId = String(active.id)
    const isSource = activeId === SEPARATOR_SOURCE_ID

    if (isSource || isSeparatorId(activeId)) {
      const separatorId = isSource ? makeSeparatorId() : activeId
      const rows = getVisualRows(activeId)
      const newOrder = computeRowSnappedOrder(
        base,
        separatorId,
        rows,
        getDragCenterY(active)
      )
      setLocalOrder(newOrder)
      if (isSource) addSeparator(separatorId, newOrder)
      else saveOrder(newOrder)
      return
    }

    // Tiles were reordered live during dragOver; persist the final order.
    // It only holds live ids, so saving also prunes stale ones.
    saveOrder(base)
  }

  // Stable callback identities (via refs) so that React.memo'd tiles don't all
  // re-render on every dragOver, while still calling the latest closures. The
  // refs are refreshed in effects (post-commit) and the handlers only fire on
  // user interaction, so they always see current values.
  const renameSeparatorRef = useRef(renameSeparator)
  const removeSeparatorRef = useRef<(id: string) => void>(() => undefined)

  useEffect(() => {
    renameSeparatorRef.current = renameSeparator
  })
  useEffect(() => {
    removeSeparatorRef.current = (id: string): void => {
      setLocalOrder(effectiveOrder.filter(tileId => tileId !== id))
      removeSeparator(id, effectiveOrder)
    }
  })

  const handleRenameSeparator = useCallback(
    (id: string, label: string): void => renameSeparatorRef.current(id, label),
    []
  )
  const handleRemoveSeparator = useCallback(
    (id: string): void => removeSeparatorRef.current(id),
    []
  )

  const activeItem = activeId
    ? (items.find(item => item.id === activeId) ?? null)
    : null

  return (
    <div className="app-list-wrapper u-m-auto u-w-100">
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
      >
        <div
          ref={gridRef}
          className="home-grid app-list app-list--gutter u-w-100 u-mh-auto u-flex-justify-center"
        >
          {previewY !== null && (
            <div className="home-separator-ghost" style={{ top: previewY }} />
          )}
          {!hasLoaded || isAppsLoading ? (
            <LoadingAppTiles num={6} />
          ) : (
            <SortableContext items={ids} strategy={rectSortingStrategy}>
              {items.map(item => (
                <SortableTile
                  key={item.id}
                  item={item}
                  onRenameSeparator={handleRenameSeparator}
                  onRemoveSeparator={handleRemoveSeparator}
                />
              ))}
            </SortableContext>
          )}
          <AppHighlightAlertWrapper apps={appsForAlerts} />
          {isMobile && Boolean(flag('cozy.assistant.enabled')) && (
            <AssistantTile />
          )}
          <AddTile apps={apps} />
          <SeparatorSource />
          {showLogout && <LogoutTile />}
        </div>
        <DragOverlay>
          {activeItem ? (
            <div className="home-drag-overlay">
              <HomeItemContent
                item={activeItem}
                onRenameSeparator={noop}
                onRemoveSeparator={noop}
              />
            </div>
          ) : activeId === SEPARATOR_SOURCE_ID ? (
            <div className="home-drag-overlay home-separator">
              <div className="home-separator-preview" />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}

export default ApplicationsAndServices
