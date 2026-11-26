import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Dialog } from 'cozy-ui/transpiled/react/CozyDialogs'

import { useForwardEscapeToTopModal } from './useForwardEscapeToTopModal'

import AppLike from '@/test/AppLike'

const Page = ({ children }) => {
  useForwardEscapeToTopModal()
  return children
}

describe('useForwardEscapeToTopModal', () => {
  it('closes the dialog with Escape after the focus fell back on <body>', () => {
    const onClose = jest.fn()
    render(
      <AppLike>
        <Page>
          <Dialog
            open
            onClose={onClose}
            title="Connect to Free Mobile"
            content={<button type="button">Connect</button>}
          />
        </Page>
      </AppLike>
    )
    // In a browser, the focus falls back on <body> when the focused button
    // gets disabled, or when a dialog closes without restoring the focus
    screen.getByRole('button', { name: 'Connect' }).focus()
    document.activeElement.blur()
    expect(document.activeElement).toBe(document.body)

    fireEvent.keyDown(document.body, { key: 'Escape' })

    expect(onClose).toHaveBeenCalled()
    expect(document.activeElement).not.toBe(document.body)
  })

  it('does not loop on a modal that neither takes the focus nor stops Escape', () => {
    const modal = document.createElement('div')
    modal.setAttribute('role', 'presentation')
    document.body.appendChild(modal)
    render(<Page />)

    expect(() =>
      fireEvent.keyDown(document.body, { key: 'Escape' })
    ).not.toThrow()

    modal.remove()
  })
})
