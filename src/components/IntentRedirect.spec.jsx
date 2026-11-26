import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { useQuery } from 'cozy-client'

import IntentRedirect from './IntentRedirect'

const mockRedirect = jest.fn()

jest.mock('cozy-client', () => ({
  ...jest.requireActual('cozy-client'),
  useClient: jest.fn(() => ({})),
  useQuery: jest.fn()
}))

jest.mock('cozy-interapp', () =>
  jest.fn().mockImplementation(() => ({
    redirect: (...args) => mockRedirect(...args)
  }))
)

const setup = url => {
  const router = createMemoryRouter(
    [
      { path: '/redirect', element: <IntentRedirect /> },
      { path: '/connected', element: <div>Home</div> },
      {
        path: '/connected/:slug/*',
        element: <div>Konnector route</div>
      }
    ],
    { initialEntries: [url] }
  )
  const result = render(<RouterProvider router={router} />)
  return { router, ...result }
}

describe('IntentRedirect', () => {
  beforeEach(() => {
    mockRedirect.mockReset().mockResolvedValue(undefined)
    useQuery.mockReturnValue({
      fetchStatus: 'loaded',
      lastFetch: Date.now(),
      data: [{ slug: 'freemobile' }]
    })
  })

  it('navigates to the account route of an installed konnector', () => {
    const { router } = setup('/redirect?konnector=freemobile&account=abc')
    expect(router.state.location.pathname).toBe(
      '/connected/freemobile/accounts/abc'
    )
    expect(screen.getByText('Konnector route')).toBeInTheDocument()
  })

  it('redirects to the store from an effect for a konnector that is not installed', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation()
    const { container } = setup('/redirect?konnector=edf')
    await waitFor(() => expect(mockRedirect).toHaveBeenCalledTimes(1))
    expect(mockRedirect).toHaveBeenCalledWith('io.cozy.apps', { slug: 'edf' })
    expect(container).toBeEmptyDOMElement()
    expect(consoleError).not.toHaveBeenCalledWith(
      expect.stringMatching(/Objects are not valid as a React child/),
      expect.anything()
    )
    consoleError.mockRestore()
  })
})
