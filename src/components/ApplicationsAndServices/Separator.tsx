import React, { useState } from 'react'

import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import PenIcon from 'cozy-ui/transpiled/react/Icons/Pen'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import TextField from 'cozy-ui/transpiled/react/TextField'
import { useI18n } from 'twake-i18n'

import { SeparatorItem } from './homeItems'

interface SeparatorProps {
  item: SeparatorItem
  onRename: (id: string, label: string) => void
  onRemove: (id: string) => void
}

// Prevents the edit controls from starting a drag of the separator
const stopDrag = (event: React.SyntheticEvent): void => event.stopPropagation()

export const Separator = ({
  item,
  onRename,
  onRemove
}: SeparatorProps): JSX.Element => {
  const { t } = useI18n()
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (
    event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent
  ): void => {
    const label = (event.target as HTMLInputElement).value.trim()
    setIsEditing(false)
    if (label !== item.label) onRename(item.id, label)
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    stopDrag(event)
    if (event.key === 'Enter') handleSubmit(event)
    else if (event.key === 'Escape') setIsEditing(false)
  }

  return (
    <div className="home-separator" data-testid="separator">
      {isEditing ? (
        <TextField
          /*
          // @ts-expect-error TextField is loosely typed */
          className="home-separator-input"
          defaultValue={item.label}
          placeholder={t('separator.name_placeholder')}
          size="small"
          variant="outlined"
          autoFocus
          onPointerDown={stopDrag}
          onKeyDown={handleKeyDown}
          onBlur={handleSubmit}
        />
      ) : (
        <>
          <Divider className="u-mv-0 u-flex-grow-1" variant="subtitle2">
            {item.label || null}
          </Divider>
          <IconButton
            aria-label={t('separator.rename')}
            size="small"
            className="home-separator-action"
            onPointerDown={stopDrag}
            onClick={() => setIsEditing(true)}
          >
            <Icon icon={PenIcon} size={12} />
          </IconButton>
          <IconButton
            aria-label={t('separator.remove')}
            size="small"
            className="home-separator-action"
            onPointerDown={stopDrag}
            onClick={() => onRemove(item.id)}
          >
            <Icon icon={TrashIcon} size={12} />
          </IconButton>
        </>
      )}
    </div>
  )
}
