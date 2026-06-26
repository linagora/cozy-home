import {
  CollisionDetection,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useMemo, useRef, useState } from 'react'

import { useI18n } from 'twake-i18n'

import { DWELL_MS, isOutsideDialog, isOverCentre } from './dndGeometry'
import {
  FolderItem,
  HomeLayout,
  TileItem,
  addToFolderAt,
  buildGrid,
  createFolderFromTile,
  folderCategoryFromDoc,
  isFolderId,
  makeFolderId,
  removeFromFolder,
  reorderFolderItems
} from './homeLayout'
import { useHomeLayout } from './useHomeLayout'

// Owns the home grid drag-and-drop: reorder via live shuffle, hold-to-group,
// spring-loaded folders and the open-folder dialog state. The component just
// renders what this returns.
export const useHomeDnd = (): {
  hasLoaded: boolean
  isAppsLoading: boolean
  apps: ReturnType<typeof useHomeLayout>['apps']
  appsForAlerts: unknown[]
  grid: ReturnType<typeof buildGrid>
  ids: string[]
  activeId: string | null
  combineTargetId: string | null
  openFolder: FolderItem | undefined
  draggedItem: TileItem | FolderItem | undefined
  effectiveLayout: HomeLayout
  sensors: ReturnType<typeof useSensors>
  collisionDetection: CollisionDetection
  setOpenFolderId: (id: string | null) => void
  handleSave: (next: HomeLayout) => void
  handleDragStart: (event: DragStartEvent) => void
  handleDragMove: (event: DragMoveEvent) => void
  handleDragCancel: () => void
  handleDragEnd: (event: DragEndEvent) => void
} => {
  const { t } = useI18n()
  const { hasLoaded, isAppsLoading, items, layout, apps, saveLayout } =
    useHomeLayout()

  const [activeId, setActiveId] = useState<string | null>(null)
  // Tile/folder currently highlighted as the hold target (visual feedback).
  const [combineTargetId, setCombineTargetId] = useState<string | null>(null)
  // Pending "hold over a tile/folder" timer, armed on each over change.
  const dwellTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Folder that sprang open during the current drag (so the drop lands inside).
  const springFolderRef = useRef<string | null>(null)
  // Tile whose central zone the dragged icon currently rests in (dwell target).
  const centralTargetRef = useRef<string | null>(null)
  // Whether the active item is being dragged from inside the open folder.
  const dragSourceRef = useRef<'grid' | 'folder'>('grid')
  const [openFolderId, setOpenFolderId] = useState<string | null>(null)
  const [localLayout, setLocalLayout] = useState<HomeLayout | null>(null)
  const dragLayoutRef = useRef<HomeLayout | null>(null)
  const [lastLayout, setLastLayout] = useState(layout)

  if (lastLayout !== layout) {
    setLastLayout(layout)
    setLocalLayout(null)
  }

  const effectiveLayout = localLayout ?? layout
  const grid = useMemo(
    () => buildGrid(effectiveLayout, items),
    [effectiveLayout, items]
  )
  const ids = useMemo(() => grid.map(g => g.id), [grid])
  const appsForAlerts = useMemo(
    () =>
      items
        .filter(i => i.type === 'app')
        .map(i => (i.type === 'app' ? i.app : null))
        .filter(Boolean),
    [items]
  )

  const openFolder = grid.find(
    (g): g is FolderItem => g.id === openFolderId && g.type === 'folder'
  )
  const openFolderItemIds = openFolder ? openFolder.items.map(i => i.id) : null

  // When a folder is open, only its inner tiles are drop targets: this lets a
  // grid drag enter the open folder and a folder drag reorder/leave it.
  const collisionDetection: CollisionDetection = args => {
    if (openFolderItemIds) {
      const set = new Set(openFolderItemIds)
      const inDialog = args.droppableContainers.filter(c =>
        set.has(String(c.id))
      )
      return pointerWithin({ ...args, droppableContainers: inDialog })
    }
    return closestCenter(args)
  }

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 500, tolerance: 8 }
    }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const clearDwell = (): void => {
    if (dwellTimerRef.current) {
      clearTimeout(dwellTimerRef.current)
      dwellTimerRef.current = null
    }
  }

  const handleSave = (next: HomeLayout): void => {
    setLocalLayout(next)
    saveLayout(next)
  }

  // Default name for a folder created by dropping an item: the dropped app's
  // (or konnector's) first manifest category, translated via the existing
  // category.* keys. Falls back to the generic name when there is no usable
  // category.
  const folderNameForDragged = (itemId: string): string => {
    const item = items.find(i => i.id === itemId)
    const doc =
      item?.type === 'app'
        ? item.app
        : item?.type === 'konnector'
          ? item.konnector
          : undefined
    const category = folderCategoryFromDoc(doc)
    if (category) {
      const label = t(`category.${category}`)
      if (label && !label.startsWith('category.')) return label
    }
    return t('folder.default_name')
  }

  const handleDragStart = ({ active }: DragStartEvent): void => {
    const id = String(active.id)
    setActiveId(id)
    clearDwell()
    setCombineTargetId(null)
    springFolderRef.current = null
    centralTargetRef.current = null
    const fromFolder = Boolean(openFolder?.items.some(i => i.id === id))
    dragSourceRef.current = fromFolder ? 'folder' : 'grid'
    if (fromFolder) {
      dragLayoutRef.current = effectiveLayout
      return
    }
    // Materialise `order` from the full grid so reorder/insert always find
    // every id (the saved order is sparse, often empty).
    const normalized: HomeLayout = { ...effectiveLayout, order: ids }
    dragLayoutRef.current = normalized
    setLocalLayout(normalized)
  }

  // Siblings shuffle live (rectSortingStrategy) to preview a reorder. Holding
  // the dragged icon over another tile's central zone instead starts a dwell:
  // while the hold target is set the shuffle freezes (noSortStrategy) so the
  // target stays put, and after DWELL_MS a group springs open around it.
  const handleDragMove = ({ active, over }: DragMoveEvent): void => {
    if (dragSourceRef.current === 'folder') return
    if (springFolderRef.current) return // already inside a sprung-open folder
    const id = String(active.id)
    const overId = over ? String(over.id) : null
    const central =
      overId !== null &&
      overId !== id &&
      !isFolderId(id) &&
      isOverCentre(active, over)

    if (!central) {
      if (centralTargetRef.current) {
        centralTargetRef.current = null
        clearDwell()
        setCombineTargetId(null)
      }
      return
    }
    // Same central target as the last move: let the dwell timer keep running.
    if (centralTargetRef.current === overId) return

    centralTargetRef.current = overId
    setCombineTargetId(overId) // highlight + freeze the shuffle
    clearDwell()
    const overIsFolder = isFolderId(overId)
    dwellTimerRef.current = setTimeout(() => {
      setCombineTargetId(null)
      if (overIsFolder) {
        springFolderRef.current = overId
        setOpenFolderId(overId)
        return
      }
      // Create a new folder around the held tile and spring it open.
      const newFolderId = makeFolderId()
      const next = createFolderFromTile(
        dragLayoutRef.current ?? effectiveLayout,
        overId,
        newFolderId,
        folderNameForDragged(id)
      )
      dragLayoutRef.current = next
      springFolderRef.current = newFolderId
      setLocalLayout(next)
      setOpenFolderId(newFolderId)
    }, DWELL_MS)
  }

  const handleDragCancel = (): void => {
    setActiveId(null)
    clearDwell()
    setCombineTargetId(null)
    centralTargetRef.current = null
    if (springFolderRef.current) setOpenFolderId(null)
    springFolderRef.current = null
    dragLayoutRef.current = null
    setLocalLayout(null)
  }

  const handleDragEnd = ({ active, over }: DragEndEvent): void => {
    const draggedId = String(active.id)
    const source = dragSourceRef.current
    const spring = springFolderRef.current
    const base = dragLayoutRef.current ?? effectiveLayout
    const overId = over ? String(over.id) : null
    setActiveId(null)
    clearDwell()
    setCombineTargetId(null)
    centralTargetRef.current = null
    springFolderRef.current = null

    // 1) An item dragged from inside the open folder.
    if (source === 'folder' && openFolder) {
      const folderId = openFolder.id
      const itemIds = openFolder.items.map(i => i.id)
      if (isOutsideDialog(active)) {
        handleSave(removeFromFolder(effectiveLayout, folderId, draggedId))
        return
      }
      if (overId && overId !== draggedId) {
        const from = itemIds.indexOf(draggedId)
        const to = itemIds.indexOf(overId)
        if (from !== -1 && to !== -1) {
          handleSave(
            reorderFolderItems(
              effectiveLayout,
              folderId,
              arrayMove(itemIds, from, to)
            )
          )
        }
      }
      return
    }

    // 2) A grid item dropped into a folder that sprang open mid-drag (existing
    // or just created around the held tile).
    if (spring) {
      if (!isOutsideDialog(active)) {
        const folderItems = base.folders[spring]?.items ?? []
        const idx = overId ? folderItems.indexOf(overId) : -1
        const index = idx === -1 ? folderItems.length : idx
        const next = addToFolderAt(base, spring, draggedId, index)
        setLocalLayout(next)
        saveLayout(next)
        setOpenFolderId(spring)
      } else {
        // Pulled back out: cancel. Reverting localLayout drops a folder that was
        // created mid-drag (never saved) and restores the dragged tile's slot.
        setOpenFolderId(null)
        setLocalLayout(null)
      }
      return
    }

    // 3) Plain grid reorder to wherever the live shuffle previewed.
    if (overId && overId !== draggedId) {
      const from = base.order.indexOf(draggedId)
      const to = base.order.indexOf(overId)
      if (from !== -1 && to !== -1) {
        const next = { ...base, order: arrayMove(base.order, from, to) }
        setLocalLayout(next)
        saveLayout(next)
        return
      }
    }
    saveLayout(base)
  }

  const draggedItem: TileItem | FolderItem | undefined =
    grid.find(g => g.id === activeId) ??
    openFolder?.items.find(i => i.id === activeId)

  return {
    hasLoaded,
    isAppsLoading,
    apps,
    appsForAlerts,
    grid,
    ids,
    activeId,
    combineTargetId,
    openFolder,
    draggedItem,
    effectiveLayout,
    sensors,
    collisionDetection,
    setOpenFolderId,
    handleSave,
    handleDragStart,
    handleDragMove,
    handleDragCancel,
    handleDragEnd
  }
}
