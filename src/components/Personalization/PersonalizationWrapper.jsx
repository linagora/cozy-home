import { Grow, Popper, ClickAwayListener } from '@material-ui/core'
import cx from 'classnames'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Icon, Pen } from '@linagora/twake-icons'
import flag from 'cozy-flags'
import BottomSheet, {
  BottomSheetItem
} from 'cozy-ui/transpiled/react/BottomSheet'
import Fab from 'cozy-ui/transpiled/react/Fab'
import Paper from 'cozy-ui/transpiled/react/Paper'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { useI18n } from 'twake-i18n'

import styles from './Personalization.styl'
import { PersonalizationModal } from './PersonalizationModal'

export const PersonalizationWrapper = () => {
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()

  const [openAppMenu, setOpenAppMenu] = useState(false)
  const [isPopperAnimationComplete, setIsPopperAnimationComplete] =
    useState(false)
  const ref = useRef(null)
  const panelRef = useRef(null)

  const closeAppMenu = useCallback(({ restoreFocus = false } = {}) => {
    setOpenAppMenu(false)
    setIsPopperAnimationComplete(false)
    if (restoreFocus) ref.current?.focus()
  }, [])

  const toggleAppMenu = () => {
    if (openAppMenu) {
      closeAppMenu()
    } else {
      setOpenAppMenu(true)
    }
  }

  // The pen button is outside the panel: a click on it is also a click away.
  // Let its own handler toggle the panel, instead of closing then reopening it.
  const handleClickAway = event => {
    if (ref.current?.contains(event.target)) return
    closeAppMenu()
  }

  useEffect(() => {
    if (!openAppMenu) return
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeAppMenu({ restoreFocus: true })
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openAppMenu, closeAppMenu])

  const handlePopperEntered = () => {
    setIsPopperAnimationComplete(true)
    // Move the focus into the panel, so that it can be used with the keyboard
    panelRef.current?.focus()
  }

  return (
    <>
      <div
        className={cx(
          styles['personalize-fab-container'],
          'u-pos-fixed',
          'u-right-m',
          flag('cozy.searchbar.enabled') && isMobile
            ? styles['personalize-fab-container-with-searchbar']
            : 'u-bottom-l'
        )}
        key="personalize-fab-container"
      >
        <Fab
          onClick={() => toggleAppMenu()}
          ref={ref}
          aria-label={t('wallpaper.open_dialog')}
          key="personalize-fab"
          className="u-bdrs-circle"
        >
          <Icon
            icon={Pen}
            key="personalize-fab-icon"
            color="var(--primaryColor)"
            size={18}
          />
        </Fab>
      </div>

      {isMobile && openAppMenu && (
        <BottomSheet
          onClose={() => setOpenAppMenu(false)}
          key="personalize-bottom-sheet"
          backdrop
        >
          <BottomSheetItem disableGutters>
            <div className={styles['personalize-bottomSheet-content']}>
              <PersonalizationModal isAnimationComplete={true} />
            </div>
          </BottomSheetItem>
        </BottomSheet>
      )}

      {!isMobile && (
        <Popper
          id="popper"
          role="dialog"
          aria-label={t('wallpaper.dialog_title')}
          open={openAppMenu}
          // eslint-disable-next-line react-hooks/refs
          anchorEl={ref.current}
          transition
          className={styles['personalize-popper']}
          placement="bottom-end"
          modifiers={{ offset: { offset: '0,8' } }}
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Grow
                {...TransitionProps}
                className={styles['personalize-grow']}
                onEntered={handlePopperEntered}
              >
                <Paper elevation={8} className="u-mr-1 u-mb-1 u-bdrs-6">
                  <div
                    ref={panelRef}
                    tabIndex={-1}
                    className={`${styles['personalize-modal-container']} u-bdrs-6 u-ov-hidden`}
                  >
                    <PersonalizationModal
                      isAnimationComplete={isPopperAnimationComplete}
                      showCloseButton
                      onClose={() => closeAppMenu({ restoreFocus: true })}
                    />
                  </div>
                </Paper>
              </Grow>
            </ClickAwayListener>
          )}
        </Popper>
      )}
    </>
  )
}
