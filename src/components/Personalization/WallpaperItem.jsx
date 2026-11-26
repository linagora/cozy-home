import cx from 'classnames'
import React from 'react'

import { Icon, Cross } from '@linagora/twake-icons'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Typography from 'cozy-ui/transpiled/react/Typography'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { useCozyTheme } from 'cozy-ui/transpiled/react/providers/CozyTheme'
import { useI18n } from 'twake-i18n'

import styles from './Wallpaper.styl'
import { getWallpaperSrc, getWallpaperLabel } from './wallpaperUtils'

export const WallpaperItem = ({
  wallpaper,
  isSelected,
  binaryCustomWallpaper,
  onSelect,
  onRemove
}) => {
  const { type } = useCozyTheme()
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()

  const src = getWallpaperSrc(wallpaper, binaryCustomWallpaper, type)
  const label = getWallpaperLabel(wallpaper, t, binaryCustomWallpaper)
  const hasCustomWallpaper =
    wallpaper.role === 'import' && binaryCustomWallpaper

  const className = cx(
    styles['wallpaperItem'],
    styles['wallpaperItem--' + type],
    {
      [styles['wallpaperItem--selected']]: isSelected
    },
    'u-ov-hidden u-pos-relative u-bdrs-6'
  )

  const labelColor = hasCustomWallpaper
    ? undefined
    : wallpaper.role === 'import'
      ? 'primary'
      : 'textSecondary'

  const labelStyle = wallpaper.labelColor
    ? { color: wallpaper.labelColor }
    : hasCustomWallpaper
      ? { color: 'white' }
      : undefined

  return (
    <div className={className}>
      {/* A native button, so that the card can be reached and chosen with
          the keyboard. The remove button is its sibling, not its child. */}
      <button
        type="button"
        className={cx(styles['wallpaperButton'], 'u-c-pointer')}
        aria-pressed={isSelected}
        onClick={onSelect}
      >
        {src && (
          // The label of the card names it already
          <img className={styles['wallpaperImage']} src={src} alt="" />
        )}
        {hasCustomWallpaper && (
          <div
            className={cx(styles['wallpaperOverlay'], 'u-o-20 u-w-100 u-h-100')}
          />
        )}
        <Typography
          variant="caption"
          component="span"
          className={styles['wallpaperLabel']}
          color={labelColor}
          style={labelStyle}
        >
          {label}
        </Typography>
      </button>
      {hasCustomWallpaper && (
        // Positioned wrapper: the Avatar's own position: relative would win
        // over utility classes and push it out of the card.
        <div
          className={cx(
            styles['wallpaperRemove'],
            isMobile ? 'u-top-0 u-right-0' : 'u-top-xs u-right-xs'
          )}
        >
          <Avatar
            color="var(--primaryColor)"
            className={isMobile ? undefined : 'u-o-40'}
            size={isMobile ? 'small' : undefined}
          >
            <IconButton
              size="small"
              className="u-p-0"
              aria-label={t('wallpaper.remove_custom')}
              onClick={async e => {
                e.stopPropagation()
                await onRemove()
              }}
            >
              <Icon
                icon={Cross}
                size={12}
                color={isMobile ? 'var(--white)' : 'var(--black)'}
              />
            </IconButton>
          </Avatar>
        </div>
      )}
    </div>
  )
}
