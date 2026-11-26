import { render } from '@testing-library/react'
import React from 'react'

import { useClient } from 'cozy-client'

import ShortcutCreateModal from './ShortcutCreateModal'
import ShortcutEditModal from './ShortcutEditModal'

let mockOnSave
jest.mock('cozy-ui/transpiled/react/CozyDialogs', () => ({
  ShortcutDialog: ({ onSave }) => {
    mockOnSave = onSave
    return null
  }
}))
jest.mock('cozy-ui-plus/dist/providers/CozyTheme', () => ({ children }) => (
  <>{children}</>
))
jest.mock('@/components/Sections/hooks/useMagicFolder', () => ({
  useMagicFolder: () => 'magic-folder-id'
}))
jest.mock('cozy-logger', () => jest.fn())
jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useClient: jest.fn()
}))

const makeClient = () => {
  const files = {
    deleteFilePermanently: jest.fn().mockResolvedValue({}),
    updateFile: jest.fn().mockResolvedValue({}),
    updateAttributes: jest.fn().mockResolvedValue({}),
    ensureDirectoryExists: jest.fn()
  }
  return {
    files,
    collection: jest.fn(() => files),
    save: jest.fn().mockResolvedValue({}),
    query: jest.fn().mockResolvedValue({})
  }
}

describe('ShortcutCreateModal', () => {
  it.each(['javascript:alert(document.domain)', 'https://not a url'])(
    'refuses to create a shortcut to %s',
    async url => {
      const client = makeClient()
      useClient.mockReturnValue(client)
      render(<ShortcutCreateModal onClose={jest.fn()} />)

      await expect(mockOnSave('Bad.url', url)).rejects.toThrow()
      expect(client.save).not.toHaveBeenCalled()
    }
  )
})

describe('ShortcutEditModal', () => {
  const file = {
    _id: 'shortcut-id',
    name: 'ShA.url',
    dir_id: 'sub-folder-id'
  }
  const shortcutInfos = { data: { name: 'ShA.url', url: 'https://sha.com' } }

  it('updates the shortcut in place, keeping its id and folder', async () => {
    const client = makeClient()
    useClient.mockReturnValue(client)
    render(
      <ShortcutEditModal
        file={file}
        shortcutInfos={shortcutInfos}
        onClose={jest.fn()}
      />
    )

    await mockOnSave('ShA2.url', 'https://sha2.example.com')

    expect(client.files.deleteFilePermanently).not.toHaveBeenCalled()
    expect(client.save).not.toHaveBeenCalled()
    expect(client.files.updateFile).toHaveBeenCalledWith(
      '[InternetShortcut]\r\nURL=https://sha2.example.com\r\n',
      {
        fileId: 'shortcut-id',
        name: 'ShA.url',
        contentType: 'application/internet-shortcut'
      }
    )
    expect(client.files.updateAttributes).toHaveBeenCalledWith('shortcut-id', {
      name: 'ShA2.url'
    })
  })

  it('does not rewrite the content when only the name changes', async () => {
    const client = makeClient()
    useClient.mockReturnValue(client)
    render(
      <ShortcutEditModal
        file={file}
        shortcutInfos={shortcutInfos}
        onClose={jest.fn()}
      />
    )

    await mockOnSave('Renamed.url', 'https://sha.com')
    expect(client.files.updateFile).not.toHaveBeenCalled()
    expect(client.files.updateAttributes).toHaveBeenCalledWith('shortcut-id', {
      name: 'Renamed.url'
    })
  })
})
