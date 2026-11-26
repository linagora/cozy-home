import { act, fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'
import '@testing-library/jest-dom'

import { Q, useFetchShortcut } from 'cozy-client'
import { createMockClient } from 'cozy-client/dist/mock'
import { initQuery, receiveQueryResult } from 'cozy-client/dist/store'

import { ShortcutLink } from './ShortcutLink'

import AppLike from '@/test/AppLike'

let mockIsMobile = false
jest.mock('cozy-ui/transpiled/react/providers/Breakpoints', () => {
  const actual = jest.requireActual(
    'cozy-ui/transpiled/react/providers/Breakpoints'
  )
  const useBreakpoints = () => ({ isMobile: mockIsMobile })
  return {
    ...actual,
    __esModule: true,
    default: useBreakpoints,
    useBreakpoints
  }
})

jest.mock('cozy-client', () => {
  return {
    ...jest.requireActual('cozy-client'),
    useClient: () => {},
    useFetchShortcut: jest.fn(),
    withClient: jest.fn()
  }
})

describe('ShortcutLink', () => {
  it('should render a shortcut link with shortcut name initial', () => {
    useFetchShortcut.mockReturnValue({
      shortcutInfos: { data: { url: 'http://cozy.io' } }
    })

    const file = { _id: '123', name: 'cozy.io.url', type: 'file' }

    render(
      <AppLike>
        <ShortcutLink file={file} />
      </AppLike>
    )

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      'cozy.io'
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://cozy.io')
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('C')
  })

  it.skip('should render a custom icon from metadata', () => {
    // skipped because SquareAppIcon does not implement it yet
    useFetchShortcut.mockReturnValue({
      shortcutInfos: {
        data: {
          attributes: { url: 'http://cozy.io', metadata: { icon: '<svg />' } }
        }
      }
    })

    const file = { _id: '123', name: 'cozy.io.url', type: 'file' }

    render(
      <AppLike>
        <ShortcutLink file={file} />
      </AppLike>
    )

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      'cozy.io'
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://cozy.io')
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'data:image/svg+xml;base64,PHN2ZyAvPg=='
    )
  })
})

describe('ShortcutLink security and accessibility', () => {
  it('does not render a javascript: URL as the href of the tile', () => {
    useFetchShortcut.mockReturnValue({
      shortcutInfos: { data: { url: 'javascript:alert(document.domain)' } }
    })
    const file = { _id: '123', name: 'JS.url', type: 'file' }

    const { container } = render(
      <AppLike>
        <ShortcutLink file={file} />
      </AppLike>
    )

    container.querySelectorAll('a').forEach(a => {
      expect(a.getAttribute('href') || '').not.toMatch(/^javascript:/i)
    })
  })

  it('gives an accessible name to the actions button', () => {
    useFetchShortcut.mockReturnValue({
      shortcutInfos: { data: { url: 'https://linagora.com' } }
    })
    const file = { _id: '123', name: 'Linagora.url', type: 'file' }

    render(
      <AppLike>
        <ShortcutLink file={file} />
      </AppLike>
    )

    expect(
      screen.getByRole('button', { name: 'Shortcut actions' })
    ).toBeInTheDocument()
  })

  it('shows the new URL once a modified shortcut has been refetched', () => {
    // Like the real hook, the mock keeps the URL it read at mount time
    let storedUrl = 'https://sha.example.com'
    useFetchShortcut.mockImplementation(() => {
      const [url] = useState(storedUrl)
      return { shortcutInfos: { data: { url } } }
    })
    const client = createMockClient({})
    const as = 'io.cozy.files.shortcuts/123'
    const definition = Q('io.cozy.files.shortcuts').getById('123')
    const receive = url =>
      act(() => {
        storedUrl = url
        client.store.dispatch(
          receiveQueryResult(as, {
            data: { _id: '123', _type: 'io.cozy.files.shortcuts', url }
          })
        )
      })
    client.store.dispatch(initQuery(as, definition))
    receive('https://sha.example.com')
    const file = { _id: '123', _rev: '1-a', name: 'ShA.url', type: 'file' }

    render(
      <AppLike client={client} store={client.store}>
        <ShortcutLink file={file} />
      </AppLike>
    )
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://sha.example.com'
    )

    // ShortcutEditModal refetches the shortcut after saving it
    receive('https://sha2.example.com')

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://sha2.example.com'
    )
  })

  it('cancels the touchend of the long press that opened the actions menu', () => {
    jest.useFakeTimers()
    mockIsMobile = true
    useFetchShortcut.mockReturnValue({
      shortcutInfos: { data: { url: 'https://linagora.com' } }
    })
    const file = { _id: '123', name: 'Linagora.url', type: 'file' }
    render(
      <AppLike>
        <ShortcutLink file={file} />
      </AppLike>
    )
    const link = screen.getByRole('link')

    fireEvent.touchStart(link)
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    // Otherwise the click that follows lands on the sheet's backdrop
    expect(fireEvent.touchEnd(link)).toBe(false)

    mockIsMobile = false
    jest.useRealTimers()
  })
})
