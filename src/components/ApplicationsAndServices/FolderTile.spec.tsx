import { render, screen } from '@testing-library/react'
import React from 'react'

import { useFetchShortcut } from 'cozy-client'

import { FolderTile } from './FolderTile'
import { FolderItem } from './types'

import AppLike from '@/test/AppLike'

jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useClient: jest.fn(() => ({})),
  useFetchShortcut: jest.fn()
}))

const makeFolder = (name: string): FolderItem => ({
  type: 'folder',
  id: 'folder:x',
  name,
  items: [
    {
      type: 'shortcut',
      id: 'shortcut:file-id',
      file: { _id: 'file-id', name: 'Linagora.url', type: 'file' } as never
    }
  ]
})

const setup = (name = 'Links'): HTMLElement => {
  const { container } = render(
    <AppLike>
      <FolderTile folder={makeFolder(name)} onOpen={jest.fn()} />
    </AppLike>
  )
  return container.querySelector(
    '[data-icon-id="shortcut:file-id"]'
  ) as HTMLElement
}

describe('FolderTile', () => {
  it('shows the icon of a shortcut without metadata icon in its preview', () => {
    ;(useFetchShortcut as jest.Mock).mockReturnValue({
      shortcutImg:
        'https://cozy.localhost/bitwarden/icons/linagora.com/icon.png'
    })
    const cell = setup()
    expect(cell.querySelector('img')).toHaveAttribute(
      'src',
      'https://cozy.localhost/bitwarden/icons/linagora.com/icon.png'
    )
  })

  it('falls back to the initial of the shortcut name', () => {
    ;(useFetchShortcut as jest.Mock).mockReturnValue({})
    const cell = setup()
    expect(cell).not.toBeEmptyDOMElement()
    expect(cell).toHaveTextContent('L')
  })

  it('labels a folder with a blank name with the default name', () => {
    ;(useFetchShortcut as jest.Mock).mockReturnValue({})
    setup('   ')
    expect(screen.getByRole('heading', { name: 'Folder' })).toBeInTheDocument()
  })
})
