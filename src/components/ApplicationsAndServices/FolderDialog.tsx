import { SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import cx from 'classnames'
import React, { useRef, useState } from 'react'

import { Dialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import CrossCircleOutlineIcon from 'cozy-ui/transpiled/react/Icons/CrossCircleOutline'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import { useI18n } from 'twake-i18n'

import { TileContent } from './TileContent'
import {
  FolderDialogItemProps,
  FolderDialogProps,
  TextField
} from './types'

const FolderDialogItem = ({
  item,
  onRemove,
  removeLabel
}: FolderDialogItemProps): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cx('home-folder-item', {
        'home-folder-item--dragging': isDragging
      })}
      data-id={item.id}
    >
      <IconButton
        className="home-folder-remove"
        size="small"
        aria-label={removeLabel}
        data-testid={`folder-remove-${item.id}`}
        onClick={() => onRemove(item.id)}
      >
        <Icon icon={CrossCircleOutlineIcon} size={18} />
      </IconButton>
      <div className="home-folder-item-icon" {...attributes} {...listeners}>
        <TileContent item={item} onOpenFolder={() => undefined} />
      </div>
    </div>
  )
}

export const FolderDialog = ({
  folder,
  onClose,
  onRename,
  onDissolve,
  onRemoveItem
}: FolderDialogProps): JSX.Element => {
  const { t } = useI18n()
  const [name, setName] = useState(folder.name)
  // Tracks the last persisted name so blur and close (which both fire when the
  // dialog is dismissed) do not save the same rename twice.
  const committedNameRef = useRef(folder.name)

  const commitRename = (): void => {
    if (name !== committedNameRef.current) {
      committedNameRef.current = name
      onRename(folder.id, name)
    }
  }

  // Persist a pending rename even when the dialog closes via Escape, which
  // dismisses before the TextField fires its blur event.
  const handleClose = (): void => {
    commitRename()
    onClose()
  }

  const ids = folder.items.map(i => i.id)

  return (
    <Dialog
      open
      onClose={handleClose}
      title={
        <TextField
          value={name}
          placeholder={t('folder.name_placeholder')}
          onChange={e => setName(e.target.value)}
          onBlur={commitRename}
          variant="standard"
        />
      }
      actions={
        <IconButton
          aria-label={t('folder.dissolve')}
          data-testid="folder-dissolve"
          onClick={() => onDissolve(folder.id)}
        >
          <Icon icon={TrashIcon} />
        </IconButton>
      }
      content={
        <SortableContext items={ids} strategy={rectSortingStrategy}>
          <div className="home-folder-content" data-testid="folder-content">
            {folder.items.map(item => (
              <FolderDialogItem
                key={item.id}
                item={item}
                onRemove={id => onRemoveItem(folder.id, id)}
                removeLabel={t('folder.remove_item')}
              />
            ))}
          </div>
        </SortableContext>
      }
    />
  )
}
