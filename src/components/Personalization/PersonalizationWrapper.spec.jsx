import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { PersonalizationWrapper } from './PersonalizationWrapper'

import AppLike from '@/test/AppLike'

jest.mock('./PersonalizationModal', () => ({
  PersonalizationModal: ({ onClose }) => (
    <button type="button" onClick={onClose}>
      Close panel
    </button>
  )
}))
jest.mock('cozy-ui/transpiled/react/providers/Breakpoints', () => ({
  __esModule: true,
  default: () => ({ isMobile: false }),
  BreakpointsProvider: ({ children }) => children
}))

const setup = () =>
  render(
    <AppLike>
      <PersonalizationWrapper />
    </AppLike>
  )

const panel = () => screen.queryByRole('dialog', { name: 'Personalization' })

// Mimics a user click: ClickAwayListener listens to the document click
const userClick = element => {
  fireEvent.mouseDown(element)
  fireEvent.mouseUp(element)
  fireEvent.click(element)
}

describe('PersonalizationWrapper', () => {
  beforeEach(() => jest.useFakeTimers())
  afterEach(() => jest.useRealTimers())

  const flush = () =>
    act(() => {
      jest.runAllTimers()
    })

  it('gives the pen button an accessible name', () => {
    setup()
    expect(
      screen.getByRole('button', { name: 'Personalize' })
    ).toBeInTheDocument()
  })

  it('closes the panel when the pen button is clicked again', () => {
    setup()
    const pen = screen.getByRole('button', { name: 'Personalize' })

    userClick(pen)
    flush()
    expect(panel()).toBeInTheDocument()

    userClick(pen)
    flush()
    expect(panel()).not.toBeInTheDocument()
  })

  it('closes the panel when clicking elsewhere', () => {
    setup()
    userClick(screen.getByRole('button', { name: 'Personalize' }))
    flush()
    expect(panel()).toBeInTheDocument()

    userClick(document.body)
    flush()
    expect(panel()).not.toBeInTheDocument()
  })

  it('closes the panel with Escape and gives the focus back to the pen', () => {
    setup()
    const pen = screen.getByRole('button', { name: 'Personalize' })
    userClick(pen)
    flush()
    expect(panel()).toBeInTheDocument()

    fireEvent.keyDown(document.activeElement || document.body, {
      key: 'Escape'
    })
    flush()
    expect(panel()).not.toBeInTheDocument()
    expect(pen).toHaveFocus()
  })
})
