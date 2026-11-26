import { render } from '@testing-library/react'
import React from 'react'

import { useClient } from 'cozy-client'

import ReloadFocus from './ReloadFocus'

jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useClient: jest.fn()
}))

describe('ReloadFocus', () => {
  it('loads the triggers with their current state on start-up', () => {
    const client = { query: jest.fn().mockResolvedValue({}) }
    useClient.mockReturnValue(client)

    render(<ReloadFocus />)

    // Without waiting for a window focus
    expect(client.query).toHaveBeenCalledWith(
      expect.objectContaining({
        doctype: 'io.cozy.triggers',
        selector: { worker: { $in: ['client', 'konnector'] } }
      }),
      expect.objectContaining({
        as: 'io.cozy.triggers/worker=client-or-konnector/withjobstatus'
      })
    )
  })
})
