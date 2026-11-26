import { render, act } from '@testing-library/react'
import React from 'react'

import { createMockClient } from 'cozy-client/dist/mock'
import { dispatchCreate, dispatchDelete } from 'cozy-client/dist/store/realtime'
import flag from 'cozy-flags'
import CozyTheme from 'cozy-ui-plus/dist/providers/CozyTheme'

import { Applications } from './Applications'

import AppLike from '@/test/AppLike'

jest.mock('cozy-flags', () => {
  return jest.fn().mockReturnValue(null)
})

const setup = ({ queries, shortcuts } = {}) => {
  const client = createMockClient({
    queries: {
      ...(queries || {
        'io.cozy.apps': {
          lastUpdate: new Date(),
          data: [],
          doctype: 'io.cozy.apps',
          hasMore: false
        }
      }),
      ...(shortcuts
        ? {
            // The shortcuts are the files of the /Settings/Home folder
            'home/io.cozy.files/path=magic-folder': {
              lastUpdate: new Date(),
              data: [{ _id: 'magic-folder-id', path: '/Settings/Home' }],
              doctype: 'io.cozy.files',
              hasMore: false
            },
            'home/io.cozy.files/shortcuts/dir_id=magic-folder-id': {
              lastUpdate: new Date(),
              data: shortcuts,
              doctype: 'io.cozy.files',
              hasMore: false
            }
          }
        : {})
    }
  })

  const root = render(
    <AppLike client={client} store={client.store}>
      <CozyTheme>
        <Applications />
      </CozyTheme>
    </AppLike>
  )
  return { root, client }
}

describe('Applications', () => {
  it('has no log out button', () => {
    const { root } = setup()
    expect(root.queryByText('Log out')).toBeFalsy()
  })

  it('has a log out button when the right flag is active', () => {
    flag.mockImplementation(flagName => {
      if (flagName === 'home.mainlist.show-logout') return true
      else return null
    })
    const { root } = setup()
    expect(root.getByText('Log out')).toBeTruthy()
  })

  it('displays retrieved shortcuts', async () => {
    const shortcuts = [
      {
        _id: '1',
        name: 'toto.txt',
        class: 'shortcut',
        dir_id: 'magic-folder-id'
      },
      {
        _id: '2',
        name: 'tata.txt',
        class: 'shortcut',
        dir_id: 'magic-folder-id'
      }
    ]
    const { root } = setup({
      shortcuts,
      queries: {
        'io.cozy.apps': {
          lastUpdate: new Date(),
          data: [],
          doctype: 'io.cozy.apps',
          hasMore: false
        }
      }
    })

    // This is necessary since there are asynchronous effects in the
    // shortcut tile
    await act(async () => {})
    expect(root.getByText('toto.txt')).toBeTruthy()
    expect(root.getByText('tata.txt')).toBeTruthy()
  })

  it('shows created and deleted shortcuts without a reload', async () => {
    const shortcuts = [
      {
        _id: '1',
        _type: 'io.cozy.files',
        type: 'file',
        name: 'toto.url',
        class: 'shortcut',
        dir_id: 'magic-folder-id'
      }
    ]
    const { root, client } = setup({ shortcuts })
    await act(async () => {})
    expect(root.getByText('toto')).toBeTruthy()
    expect(root.queryByText('Lina')).toBeNull()

    // A shortcut is created (realtime event on io.cozy.files)
    await act(async () => {
      await dispatchCreate(client, 'io.cozy.files', {
        _id: '2',
        _rev: '1-a',
        type: 'file',
        name: 'Lina.url',
        class: 'shortcut',
        dir_id: 'magic-folder-id'
      })
    })
    expect(root.getByText('Lina')).toBeTruthy()

    // It is deleted
    await act(async () => {
      await dispatchDelete(client, 'io.cozy.files', {
        _id: '2',
        _rev: '2-b',
        type: 'file',
        name: 'Lina.url',
        class: 'shortcut',
        dir_id: 'magic-folder-id',
        _deleted: true
      })
    })
    expect(root.queryByText('Lina')).toBeNull()
    expect(root.getByText('toto')).toBeTruthy()
  })

  it('orders the apps by slug, so that a newly installed app keeps its place', () => {
    const app = slug => ({
      _id: `io.cozy.apps/${slug}`,
      id: `io.cozy.apps/${slug}`,
      slug,
      name: slug.toUpperCase(),
      state: 'ready',
      links: { related: `http://${slug}.cozy.localhost` }
    })
    const { root } = setup({
      queries: {
        'io.cozy.apps': {
          lastUpdate: new Date(),
          // notes was installed while Home was open: realtime appended it
          data: [app('drive'), app('settings'), app('store'), app('notes')],
          doctype: 'io.cozy.apps',
          hasMore: false
        }
      }
    })
    const names = root
      .getAllByRole('heading', { level: 6 })
      .map(heading => heading.textContent)
      .filter(name => name !== 'Log out')
    expect(names).toEqual(['DRIVE', 'NOTES', 'SETTINGS', 'STORE'])
  })
})
