import cx from 'classnames'
import get from 'lodash/get'
import React, { useState } from 'react'
import { useOnLongPress } from 'rooks'

import { Q, useClient, useFetchShortcut, useQuery, models } from 'cozy-client'
import flag from 'cozy-flags'

const {
  file: { splitFilename, getShortcutImgSrc }
} = models

import Badge from 'cozy-ui/transpiled/react/Badge'
import Link from 'cozy-ui/transpiled/react/Link'
import { useBreakpoints } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import SquareAppIcon from 'cozy-ui-plus/dist/SquareAppIcon'

import ShortcutActionsMenu from './Shortcuts/ShortcutActionsMenu'
import styles from './Shortcuts/shortcut.styl'

import { getSafeShortcutHref } from '@/lib/shortcuts'

const SHORTCUTS_DOCTYPE = 'io.cozy.files.shortcuts'

const ShortcutLinkContent = ({ display = 'compact', file, ...props }) => {
  const client = useClient()
  const { isMobile } = useBreakpoints()

  const { shortcutInfos, shortcutImg, fetchStatus } = useFetchShortcut(
    client,
    file._id
  )
  const isLoading = fetchStatus === 'loading'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const longPressRef = useOnLongPress(() => {
    if (!isMobile) {
      return
    }
    setIsMenuOpen(true)
  })
  // The menu opens while the finger is still down: cancel the touchend so
  // that the click that follows it does not land on the sheet's backdrop.
  const onTouchEnd = event => {
    if (isMenuOpen && event.cancelable) event.preventDefault()
  }

  const { filename } = splitFilename(file)
  const rawUrl = get(shortcutInfos, 'data.url')
  // A .url file can be written by any app with access to the files: never
  // render a javascript: (or any non-web) URL as a link.
  const url = rawUrl === undefined ? '#' : getSafeShortcutHref(rawUrl)

  const shortcutImgSrc = getShortcutImgSrc(file)

  const description = get(file, 'attributes.metadata.description')

  return (
    <Badge
      badgeContent={
        <ShortcutActionsMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          file={file}
          shortcutInfos={shortcutInfos}
        />
      }
      withBorder={false}
      size="large"
      overlap="rectangular"
      className={cx(display === 'compact' && styles['shortcut-badge--compact'])}
    >
      <Link
        ref={longPressRef}
        onTouchEnd={onTouchEnd}
        underline="none"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="scale-hover"
        {...props}
      >
        {shortcutImgSrc || shortcutImg ? (
          <SquareAppIcon
            name={filename}
            variant="shortcut"
            display={display}
            description={description}
            IconContent={
              <div className="u-w-2 u-h-2">
                {shortcutImgSrc ? (
                  <img src={shortcutImgSrc} alt={filename} />
                ) : (
                  <img
                    className="u-bdrs-5"
                    src={shortcutImg}
                    width={32}
                    height={32}
                  />
                )}
              </div>
            }
            hideShortcutBadge={flag('home.hide-shortcut-badge')}
          />
        ) : (
          <SquareAppIcon
            name={filename}
            variant={isLoading ? 'loading' : 'shortcut'}
            display={display}
            IconContent={isLoading ? null : undefined}
            description={description}
            hideShortcutBadge={flag('home.hide-shortcut-badge')}
          />
        )}
      </Link>
    </Badge>
  )
}

// useFetchShortcut keeps the URL it read in local state, and a modified
// shortcut keeps its file id. Watch (without fetching) the query it fills,
// which ShortcutEditModal refetches, and remount when the URL changes so that
// the tile shows the new link and icon.
export const ShortcutLink = props => {
  const fileId = props.file._id
  const { data } = useQuery(() => Q(SHORTCUTS_DOCTYPE).getById(fileId), {
    as: `${SHORTCUTS_DOCTYPE}/${fileId}`,
    singleDocData: true,
    enabled: false
  })
  return <ShortcutLinkContent key={data?.url} {...props} />
}

export default ShortcutLink
