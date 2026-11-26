import { renderHook, waitFor } from '@testing-library/react'

import { Registry } from 'cozy-client'
import log from 'cozy-logger'

import useRegistryInformation from './useRegistryInformation'

jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  Registry: jest.fn()
}))
jest.mock('cozy-logger', () => jest.fn())

describe('useRegistryInformation', () => {
  let unhandled
  const onUnhandled = reason => unhandled.push(reason)
  beforeEach(() => {
    unhandled = []
    process.on('unhandledRejection', onUnhandled)
  })
  afterEach(() => process.off('unhandledRejection', onUnhandled))

  it('handles a failed registry lookup', async () => {
    Registry.mockImplementation(() => ({
      fetchApp: jest.fn().mockRejectedValue(new Error('registry down'))
    }))
    const { result } = renderHook(() => useRegistryInformation({}, 'drive'))
    await waitFor(() => expect(log).toHaveBeenCalled())
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(result.current).toBeNull()
    expect(unhandled).toEqual([])
  })
})
