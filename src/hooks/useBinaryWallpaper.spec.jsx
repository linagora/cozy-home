import { renderHook, waitFor } from '@testing-library/react'
import localForage from 'localforage'

import { useClient } from 'cozy-client'

import useBinaryWallpaper from './useBinaryWallpaper'

jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useClient: jest.fn()
}))
jest.mock('localforage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
}))
jest.mock('cozy-logger', () => jest.fn())

describe('useBinaryWallpaper', () => {
  let unhandled
  const onUnhandled = reason => unhandled.push(reason)

  beforeEach(() => {
    unhandled = []
    process.on('unhandledRejection', onUnhandled)
    localStorage.clear()
  })
  afterEach(() => {
    process.off('unhandledRejection', onUnhandled)
  })

  it('handles a failure of the initial load instead of losing it', async () => {
    useClient.mockReturnValue({
      collection: () => ({
        getDownloadLinkByPath: jest
          .fn()
          .mockRejectedValue(new Error('network down'))
      })
    })
    // The cleanup of the failed fetch fails too (e.g. IndexedDB unavailable)
    localForage.removeItem.mockRejectedValue(new Error('no IndexedDB'))

    const { result } = renderHook(() => useBinaryWallpaper())

    await waitFor(() => expect(result.current.status).toBe('failed'))
    // Let a possible unhandled rejection be reported
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(unhandled).toEqual([])
  })

  it('reports an upload failure to the caller', async () => {
    useClient.mockReturnValue({
      collection: () => ({
        getDownloadLinkByPath: jest.fn().mockRejectedValue(new Error('404')),
        ensureDirectoryExists: jest.fn().mockResolvedValue('dir-id'),
        statByPath: jest.fn().mockRejectedValue(new Error('404')),
        createFile: jest.fn().mockRejectedValue(new Error('quota exceeded'))
      })
    })
    localForage.removeItem.mockResolvedValue()

    const { result } = renderHook(() => useBinaryWallpaper())
    await waitFor(() => expect(result.current.status).toBe('failed'))

    await expect(
      result.current.saveCustomWallpaper(new File(['x'], 'w.png'))
    ).rejects.toThrow('quota exceeded')
  })
})
