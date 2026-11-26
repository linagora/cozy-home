import cx from 'classnames'
import React, { useEffect, useState, useRef } from 'react'

import log from 'cozy-logger'
import { useAlert } from 'cozy-ui/transpiled/react/providers/Alert'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { useI18n } from 'twake-i18n'

import styles from './Wallpaper.styl'
import { WallpaperItem } from './WallpaperItem'
import { getCurrentWallpaperKey, isDecodableImage } from './wallpaperUtils'
import { Wallpapers, ALLOWED_WALLPAPER_TYPES } from './wallpapers'

import { useWallpaperContext } from '@/hooks/useWallpaperContext'

const Wallpaper = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState()
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const { showAlert } = useAlert()

  const {
    data,
    setWallpaperLink,
    returnToDefaultWallpaper,
    clearCustomWallpaper,
    saveCustomWallpaper
  } = useWallpaperContext()

  const fileInputRef = useRef(null)

  const showInvalidImageAlert = () =>
    showAlert({ message: t('wallpaper.invalid_image'), severity: 'error' })

  const handleFileSelected = async event => {
    const input = event.target
    const file = input?.files?.[0]
    if (!file) return

    try {
      if (!ALLOWED_WALLPAPER_TYPES.has(file.type)) {
        log('error', `Unsupported wallpaper type: ${file.type || '(unknown)'}`)
        showInvalidImageAlert()
        return
      }

      // Refuse a file that the browser cannot display before replacing the
      // current wallpaper with it
      if (!(await isDecodableImage(file))) {
        log('error', 'The selected wallpaper is not a decodable image')
        showInvalidImageAlert()
        return
      }

      await saveCustomWallpaper(file)
    } catch (error) {
      log('error', `Could not import the wallpaper: ${error}`)
      showAlert({ message: t('wallpaper.import_error'), severity: 'error' })
    } finally {
      // Allow selecting the same file again by resetting the input value
      input.value = ''
    }
  }

  const handleWallpaperSelect = async wallpaper => {
    if (wallpaper.role === 'import') {
      // Selected once the image is imported (the chooser may be cancelled)
      fileInputRef.current.click()
      return
    }

    setCurrentWallpaper(wallpaper.key)

    await clearCustomWallpaper()

    if (wallpaper.role === 'default') {
      returnToDefaultWallpaper()
      return
    }

    setWallpaperLink('/assets/backgrounds/' + wallpaper.image)
  }

  const handleRemoveCustomWallpaper = async () => {
    await clearCustomWallpaper()
    setCurrentWallpaper('bg_twp_default')
  }

  // An imported image is stored as a file, not as a link: take it into
  // account, so that the Import card stays framed after a remount or reload.
  useEffect(() => {
    const wallpaperKey = getCurrentWallpaperKey(
      data?.wallpaperLink,
      Wallpapers,
      Boolean(data?.binaryCustomWallpaper)
    )
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentWallpaper(wallpaperKey)
  }, [data?.wallpaperLink, data?.binaryCustomWallpaper])

  const containerClassName = cx(styles['wallpaperGrid'], 'u-m-1', 'u-mt-0', {
    [styles['wallpaperGrid--bottomSheet']]: isMobile
  })

  return (
    <div className={containerClassName}>
      <input
        ref={fileInputRef}
        type="file"
        className="u-dn"
        accept={Array.from(ALLOWED_WALLPAPER_TYPES).join(',')}
        onChange={handleFileSelected}
      />
      {Wallpapers.map(wallpaper => (
        <WallpaperItem
          key={wallpaper.label}
          wallpaper={wallpaper}
          isSelected={currentWallpaper === wallpaper.key}
          binaryCustomWallpaper={data?.binaryCustomWallpaper}
          onSelect={() => handleWallpaperSelect(wallpaper)}
          onRemove={handleRemoveCustomWallpaper}
        />
      ))}
    </div>
  )
}

export default Wallpaper
