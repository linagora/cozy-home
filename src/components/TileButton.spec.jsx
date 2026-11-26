import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { createMockClient } from 'cozy-client/dist/mock'
import flag from 'cozy-flags'

import AddTile from './AddTile'
import AssistantTile from './AssistantTile'
import LogoutTile from './LogoutTile'

import AppLike from '@/test/AppLike'

jest.mock('cozy-flags', () => jest.fn())
jest.mock('cozy-search', () => ({
  AssistantLink: ({ children }) => children({ openAssistant: mockOpen })
}))
const mockOpen = jest.fn()

const client = createMockClient({})
client.logout = jest.fn(() => new Promise(() => {}))

const setup = element =>
  render(
    <AppLike client={client} store={client.store}>
      {element}
    </AppLike>
  )

describe('Action tiles', () => {
  it('renders the log out tile as a focusable button', () => {
    setup(<LogoutTile />)
    const tile = screen.getByRole('button', { name: /Log out/ })
    tile.focus()
    expect(tile).toHaveFocus()
    fireEvent.click(tile)
    expect(client.logout).toHaveBeenCalled()
  })

  it('renders the shortcut "Add" tile as a focusable button', () => {
    flag.mockImplementation(name => name === 'home.add-tile.add-shortcut')
    setup(<AddTile apps={[]} />)
    const tile = screen.getByRole('button', { name: /Add/ })
    tile.focus()
    expect(tile).toHaveFocus()
  })

  it('renders the assistant tile as a focusable button', () => {
    setup(<AssistantTile />)
    const tile = screen.getByRole('button', { name: /Assistant/ })
    tile.focus()
    expect(tile).toHaveFocus()
    fireEvent.click(tile)
    expect(mockOpen).toHaveBeenCalled()
  })
})
