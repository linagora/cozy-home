import { useSortable } from '@dnd-kit/sortable'
import cx from 'classnames'
import React, { memo } from 'react'

import { HomeItemContent } from './HomeItemContent'
import { HomeItem } from './homeItems'

interface SortableTileProps {
  item: HomeItem
  onRenameSeparator: (id: string, label: string) => void
  onRemoveSeparator: (id: string) => void
}

const SortableTileComponent = ({
  item,
  onRenameSeparator,
  onRemoveSeparator
}: SortableTileProps): JSX.Element => {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: item.id,
    animateLayoutChanges: () => false
  })

  const isSeparator = item.type === 'separator'

  // No sortable transform: the list is reordered for real in the DOM on
  // dragOver, so the browser lays the grid out correctly (full-width
  // separators included). Applying dnd-kit's transform here would fight that
  // real layout and is what made tiles jump to another row.
  return (
    <div
      ref={setNodeRef}
      data-id={item.id}
      className={cx('home-item', {
        'home-item--separator': isSeparator,
        'home-item--placeholder': isDragging
      })}
      {...attributes}
      {...listeners}
    >
      <HomeItemContent
        item={item}
        onRenameSeparator={onRenameSeparator}
        onRemoveSeparator={onRemoveSeparator}
      />
    </div>
  )
}

// Memoized so the whole grid does not re-render on every dragOver; with stable
// callbacks from the parent, only tiles whose item ref actually changed re-render
export const SortableTile = memo(SortableTileComponent)
