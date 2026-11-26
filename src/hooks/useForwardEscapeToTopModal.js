import { useEffect } from 'react'

/**
 * Topmost open modal (dialog, menu…): MUI renders each of them in a portal,
 * as a child of <body>, in the order they were opened.
 *
 * @returns {HTMLElement|undefined}
 */
const getTopModal = () => {
  const modals = Array.from(
    document.querySelectorAll('body > [role="presentation"]')
  ).filter(modal => modal.style.visibility !== 'hidden')
  return modals[modals.length - 1]
}

/**
 * MUI modals handle Escape in the keydown handler of their own root, so a
 * keydown on <body> never reaches them. The focus falls back on <body> when
 * the focused element is disabled (e.g. the submit button of the konnector
 * login form while it connects) or removed (e.g. a dialog closed without
 * restoring the focus), and the cozy-ui Dialog does not take it back
 * (disableEnforceFocus): Escape then no longer closes the dialog.
 *
 * When Escape is pressed with the focus on <body> while a modal is open, move
 * the focus back into the topmost modal and let it handle the key.
 */
export const useForwardEscapeToTopModal = () => {
  useEffect(() => {
    // The forwarded event bubbles up to this listener too
    let isForwarding = false
    const handleKeyDown = event => {
      if (event.key !== 'Escape' || event.defaultPrevented || isForwarding) {
        return
      }
      const active = document.activeElement
      if (active && active !== document.body) return

      const modal = getTopModal()
      if (!modal) return

      const target = modal.querySelector('[tabindex="-1"]') || modal
      target.focus()
      isForwarding = true
      try {
        target.dispatchEvent(
          new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            bubbles: true,
            cancelable: true
          })
        )
      } finally {
        isForwarding = false
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
}
