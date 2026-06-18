import React from 'react'

import { Separator } from './Separator'
import { HomeItem } from './homeItems'

import AppTile from '@/components/AppTile'
import EntrypointLink from '@/components/EntrypointLink'
import KonnectorTile from '@/components/KonnectorTile'
import ShortcutLink from '@/components/ShortcutLink'

interface HomeItemContentProps {
  item: HomeItem
  onRenameSeparator: (id: string, label: string) => void
  onRemoveSeparator: (id: string) => void
}

export const HomeItemContent = ({
  item,
  onRenameSeparator,
  onRemoveSeparator
}: HomeItemContentProps): JSX.Element | null => {
  switch (item.type) {
    case 'app':
      return <AppTile app={item.app} />
    case 'konnector':
      return (
        <KonnectorTile
          konnector={item.konnector}
          isInMaintenance={item.isInMaintenance}
          loading={item.isRunning}
        />
      )
    case 'shortcut':
      return <ShortcutLink file={item.file} />
    case 'entrypoint':
      return <EntrypointLink entrypoint={item.entrypoint} />
    case 'separator':
      return (
        <Separator
          item={item}
          onRename={onRenameSeparator}
          onRemove={onRemoveSeparator}
        />
      )
    default:
      return null
  }
}
