import React from 'react'

import { useClient } from 'cozy-client'
import { ShortcutDialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import CozyTheme from 'cozy-ui-plus/dist/providers/CozyTheme'

import { useMagicFolder } from '@/components/Sections/hooks/useMagicFolder'
import { isValidShortcutUrl } from '@/lib/shortcuts'

const ShortcutCreateModal = ({ onClose }) => {
  const client = useClient()
  const magicHomeFolderId = useMagicFolder()

  const createShortcut = async (makedFileName, makedURL) => {
    // ShortcutDialog accepts any URL that the browser can parse: only keep
    // web addresses (no javascript:, data:… nor hosts with spaces).
    if (!isValidShortcutUrl(makedURL)) {
      throw new Error(`Invalid shortcut URL: ${makedURL}`)
    }

    let homeFolderId = magicHomeFolderId

    if (!homeFolderId) {
      homeFolderId = await client
        .collection('io.cozy.files')
        .ensureDirectoryExists('/Settings/Home')
    }

    await client.save({
      _type: 'io.cozy.files.shortcuts',
      dir_id: homeFolderId,
      name: makedFileName,
      url: makedURL
    })
  }

  return (
    <CozyTheme>
      <ShortcutDialog onSave={createShortcut} onClose={onClose} />
    </CozyTheme>
  )
}

export default ShortcutCreateModal
