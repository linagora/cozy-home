import { useDraggable } from '@dnd-kit/core'
import cx from 'classnames'
import React from 'react'

import Icon from 'cozy-ui/transpiled/react/Icon'
import DashIcon from 'cozy-ui/transpiled/react/Icons/Dash'
import Typography from 'cozy-ui/transpiled/react/Typography'
import { useI18n } from 'twake-i18n'

export const SEPARATOR_SOURCE_ID = 'separator-source'

// Permanent drag handle: dragging it onto the grid creates a separator at
// the drop position
export const SeparatorSource = (): JSX.Element => {
  const { t } = useI18n()
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: SEPARATOR_SOURCE_ID
  })

  return (
    <div
      ref={setNodeRef}
      className={cx('home-separator-source', {
        'home-separator-source--dragging': isDragging
      })}
      data-testid="separator-source"
      {...attributes}
      {...listeners}
    >
      <Icon icon={DashIcon} size={24} />
      <Typography variant="caption" className="u-mt-half">
        {t('separator.add')}
      </Typography>
    </div>
  )
}
