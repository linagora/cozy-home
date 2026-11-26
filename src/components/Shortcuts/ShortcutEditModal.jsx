import React from 'react'

import { Q, useClient } from 'cozy-client'
import log from 'cozy-logger'
import { ShortcutDialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import CozyTheme from 'cozy-ui-plus/dist/providers/CozyTheme'

import {
  SHORTCUT_MIME_TYPE,
  isValidShortcutUrl,
  makeShortcutFileContent
} from '@/lib/shortcuts'

const SHORTCUTS_DOCTYPE = 'io.cozy.files.shortcuts'

const ShortcutEditModal = ({ file, shortcutInfos, onClose }) => {
  const client = useClient()

  const { data: shortcutData } = shortcutInfos

  const onSave = async (makedFileName, makedURL) => {
    if (!isValidShortcutUrl(makedURL)) {
      throw new Error(`Invalid shortcut URL: ${makedURL}`)
    }

    const fileId = file._id
    const files = client.collection('io.cozy.files')

    // Update the existing file instead of re-creating it, so that it keeps its
    // id, and thus its position in the Home grid or in its folder, as well as
    // its parent directory.
    if (makedURL !== shortcutData?.url) {
      await files.updateFile(makeShortcutFileContent(makedURL), {
        fileId,
        name: file.name,
        contentType: SHORTCUT_MIME_TYPE
      })
    }
    if (makedFileName !== file.name) {
      await files.updateAttributes(fileId, { name: makedFileName })
    }

    // The tile reads its URL from this cached query: refresh it. The
    // shortcut is saved at this point, so do not report a failure here.
    try {
      await client.query(Q(SHORTCUTS_DOCTYPE).getById(fileId), {
        as: `${SHORTCUTS_DOCTYPE}/${fileId}`,
        singleDocData: true
      })
    } catch (error) {
      log('error', `Could not refresh the shortcut ${fileId}: ${error}`)
    }
  }

  return (
    <CozyTheme>
      <ShortcutDialog
        shortcut={shortcutData}
        onSave={onSave}
        onClose={onClose}
      />
    </CozyTheme>
  )
}

export default ShortcutEditModal
