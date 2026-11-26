/**
 * Returns the source URL or data for a given wallpaper.
 *
 * @param {Object} wallpaper - The wallpaper object.
 * @param {string|undefined} binaryCustomWallpaper - The custom wallpaper as a base64 string or URL (if applicable).
 * @param {string} theme - The theme of the wallpaper.
 * @returns {string|null} - The resolved wallpaper image source (URL, base64 data, etc).
 */
export const getWallpaperSrc = (wallpaper, binaryCustomWallpaper, theme) => {
  if (wallpaper.role === 'default' && theme === 'light') {
    return '/assets/backgrounds/' + wallpaper.lightThumbnail
  }
  if (wallpaper.role === 'import' && binaryCustomWallpaper) {
    return binaryCustomWallpaper
  }
  if (wallpaper.image) {
    return '/assets/backgrounds/' + wallpaper.image
  }
  return null
}

/**
 * Returns the alt text for a given wallpaper image.
 *
 * @param {Object} wallpaper - The wallpaper object.
 * @param {Function} t - Translation function.
 * @returns {string} The alt text for the wallpaper.
 */
export const getWallpaperAlt = (wallpaper, t) => {
  return wallpaper.role === 'import' ? t('wallpaper.import') : wallpaper.label
}

/**
 * Returns the label text for a given wallpaper.
 *
 * @param {Object} wallpaper - The wallpaper object.
 * @param {Function} t - Translation function.
 * @returns {string} The label text for the wallpaper.
 */
export const getWallpaperLabel = (wallpaper, t) => {
  return wallpaper.role === 'import' ? t('wallpaper.import') : wallpaper.label
}

/**
 * Returns the current wallpaper key based on wallpaperLink.
 *
 * @param {string} wallpaperLink - The wallpaper link.
 * @param {Array} wallpapers - The wallpapers array.
 * @param {boolean} [hasCustomWallpaper] - Whether an imported image is the wallpaper.
 * @returns {string} The current wallpaper key.
 */
export const getCurrentWallpaperKey = (
  wallpaperLink,
  wallpapers,
  hasCustomWallpaper = false
) => {
  // An imported image is stored as a file, not as a link
  if (hasCustomWallpaper) {
    return 'bg_custom'
  }

  if (!wallpaperLink) {
    return 'bg_twp_default'
  }

  const imageName = wallpaperLink.split('/').pop()
  const wallpaper = wallpapers.find(wp => wp.image === imageName)

  return wallpaper ? wallpaper.key : 'bg_custom'
}

/**
 * Checks that a file can be decoded as an image by the browser.
 *
 * The type of a File is derived from its extension, not from its content:
 * a text file named "fake.png" has the type "image/png".
 *
 * @param {Blob} file - The file to check.
 * @returns {Promise<boolean>} Whether the file is a decodable image.
 */
export const isDecodableImage = file =>
  new Promise(resolve => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    const done = result => {
      URL.revokeObjectURL(url)
      resolve(result)
    }
    img.onload = () => done(true)
    img.onerror = () => done(false)
    img.src = url
  })
