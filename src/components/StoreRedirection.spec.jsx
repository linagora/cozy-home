import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import StoreRedirection from './StoreRedirection'

const mockRedirect = jest.fn()

jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useClient: jest.fn(() => ({}))
}))

jest.mock('cozy-interapp', () =>
  jest.fn().mockImplementation(() => ({
    redirect: (...args) => mockRedirect(...args)
  }))
)

const setup = url => {
  const router = createMemoryRouter(
    [
      { path: '/connected/providers', element: <StoreRedirection /> },
      { path: '/connected/providers/:category', element: <StoreRedirection /> }
    ],
    { initialEntries: [url] }
  )
  render(<RouterProvider router={router} />)
}

describe('StoreRedirection', () => {
  beforeEach(() => {
    mockRedirect.mockReset().mockResolvedValue(undefined)
  })

  it('passes the category of the route to the store', async () => {
    setup('/connected/providers/energy')
    await waitFor(() => expect(mockRedirect).toHaveBeenCalled())
    expect(mockRedirect).toHaveBeenCalledWith('io.cozy.apps', {
      type: 'konnector',
      category: 'energy'
    })
  })
})
