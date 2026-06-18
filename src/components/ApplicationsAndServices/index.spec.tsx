import { render, screen } from '@testing-library/react'
import React from 'react'

import { ApplicationsAndServices } from './index'
import { useHomeLayout } from './useHomeLayout'

import AppLike from '@/test/AppLike'

jest.mock('./useHomeLayout')

jest.mock('@/components/AppTile', () => ({
  __esModule: true,
  default: ({ app }: { app: { slug: string } }): JSX.Element => (
    <div data-testid="tile">{app.slug}</div>
  )
}))
jest.mock('@/components/AppHighlightAlert/AppHighlightAlertWrapper', () => ({
  __esModule: true,
  default: (): null => null
}))
jest.mock('@/components/AddTile', () => ({
  __esModule: true,
  default: (): JSX.Element => <div data-testid="add-tile" />
}))

const mockUseHomeLayout = useHomeLayout as jest.Mock

const appItem = (slug: string): unknown => ({
  type: 'app',
  id: `app:${slug}`,
  app: { slug }
})

const setup = ({
  liveItems = [appItem('drive'), appItem('notes')],
  order = [] as string[],
  separators = {},
  hasLoaded = true,
  isAppsLoading = false
} = {}): void => {
  mockUseHomeLayout.mockReturnValue({
    hasLoaded,
    isAppsLoading,
    liveItems,
    order,
    separators,
    apps: [],
    saveOrder: jest.fn(),
    addSeparator: jest.fn(),
    renameSeparator: jest.fn(),
    removeSeparator: jest.fn()
  })
  render(
    <AppLike>
      <ApplicationsAndServices />
    </AppLike>
  )
}

describe('ApplicationsAndServices', () => {
  it('renders tiles in their default order when nothing is saved', () => {
    setup()
    expect(screen.getAllByTestId('tile').map(t => t.textContent)).toEqual([
      'drive',
      'notes'
    ])
  })

  it('applies the saved order and appends unknown items at the end', () => {
    setup({ order: ['app:notes', 'app:drive'] })
    expect(screen.getAllByTestId('tile').map(t => t.textContent)).toEqual([
      'notes',
      'drive'
    ])
  })

  it('renders a separator declared in the order, with its label', () => {
    setup({
      liveItems: [appItem('drive')],
      order: ['app:drive', 'separator:a'],
      separators: { 'separator:a': { label: 'Travail' } }
    })
    expect(screen.queryByTestId('separator')).toBeInTheDocument()
    expect(screen.getByText('Travail')).toBeInTheDocument()
  })

  it('shows nothing sortable until the settings have loaded', () => {
    setup({ hasLoaded: false })
    expect(screen.queryByTestId('tile')).toBe(null)
  })

  it('always renders the separator source and the add tile', () => {
    setup()
    expect(screen.queryByTestId('separator-source')).toBeInTheDocument()
    expect(screen.queryByTestId('add-tile')).toBeInTheDocument()
  })
})
