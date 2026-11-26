import React from 'react'

import CozyClient, { models, useClient, useFetchShortcut } from 'cozy-client'
import type { IOCozyFile } from 'cozy-client/types/types'
import SquareAppIcon from 'cozy-ui-plus/dist/SquareAppIcon'
import { useI18n } from 'twake-i18n'

import { AppIcon, FolderTileProps, TileItem } from './types'

const {
  file: { getShortcutImgSrc, splitFilename }
} = models

// Same fallbacks as the shortcut tile (ShortcutLink): the icon stored in the
// file metadata, else the icon fetched by the stack for the target host, else
// the initial of the shortcut name.
const ShortcutPreviewIcon = ({
  file
}: {
  file: IOCozyFile
}): JSX.Element | null => {
  const client = useClient() as CozyClient
  const { shortcutImg } = useFetchShortcut(client, file._id) as {
    shortcutImg?: string
  }
  const src = getShortcutImgSrc(file) || shortcutImg
  if (src) {
    return <img className="home-folder-preview-img" src={src} alt="" />
  }
  const { filename } = splitFilename(file) as { filename: string }
  return (
    <span className="home-folder-preview-initial" aria-hidden="true">
      {(filename || '?').charAt(0).toUpperCase()}
    </span>
  )
}

// A single inner item rendered as a small icon for the folder preview. Every
// item type resolves to the same square so the preview stays uniform.
const PreviewIcon = ({ item }: { item: TileItem }): JSX.Element | null => {
  switch (item.type) {
    case 'app':
      return (
        <AppIcon
          app={item.app}
          type="app"
          className="home-folder-preview-img"
        />
      )
    case 'konnector':
      return (
        <AppIcon
          app={item.konnector}
          type="konnector"
          className="home-folder-preview-img"
        />
      )
    case 'shortcut':
      return <ShortcutPreviewIcon file={item.file} />
    case 'entrypoint':
      return (
        <img
          className="home-folder-preview-img"
          src={`data:image/svg+xml;base64,${item.entrypoint.icon}`}
          alt=""
        />
      )
    default:
      return null
  }
}

export const FolderTile = ({
  folder,
  onOpen
}: FolderTileProps): JSX.Element => {
  const { t } = useI18n()
  const preview = folder.items.slice(0, 4)
  return (
    <button
      type="button"
      className="scale-hover home-folder-tile"
      onClick={() => onOpen(folder.id)}
      data-testid="folder-tile"
    >
      <SquareAppIcon
        name={folder.name.trim() || t('folder.default_name')}
        variant="shortcut"
        hideShortcutBadge
        IconContent={
          <div className="home-folder-preview">
            {preview.map(item => (
              <div
                key={item.id}
                className="home-folder-preview-cell"
                data-icon-id={item.id}
              >
                <PreviewIcon item={item} />
              </div>
            ))}
          </div>
        }
      />
    </button>
  )
}
