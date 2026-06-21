import React from 'react'

import { FolderTile } from './FolderTile'
import { GridItem } from './homeLayout'

import AppTile from '@/components/AppTile'
import EntrypointLink from '@/components/EntrypointLink'
import KonnectorTile from '@/components/KonnectorTile'
import ShortcutLink from '@/components/ShortcutLink'

interface TileContentProps {
  item: GridItem
  onOpenFolder: (id: string) => void
}

export const TileContent = ({
  item,
  onOpenFolder
}: TileContentProps): JSX.Element | null => {
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
    case 'folder':
      return <FolderTile folder={item} onOpen={onOpenFolder} />
    default:
      return null
  }
}
