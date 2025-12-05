import React, { useState } from 'react'

import styles from './Personalization.styl'
import Wallpaper from './Wallpaper'

import { useClient } from 'cozy-client'
import { ThemeSwitcher } from './ThemeSwitcher'
import Button from 'cozy-ui/transpiled/react/Button'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import cx from 'classnames'
import Widget from './Widget'
import { Transition } from 'react-transition-group'
import flag from 'cozy-flags'
import Icon from 'cozy-ui/transpiled/react/Icon'
import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'
import MosaicIcon from 'cozy-ui/transpiled/react/Icons/Mosaic'
import PaletteIcon from 'cozy-ui/transpiled/react/Icons/Palette'

export const PersonalizationModal = ({
  isAnimationComplete = false,
  showCloseButton = false,
  onClose = undefined
}) => {
  const client = useClient()
  const headerSwitcherClassname = showCloseButton
    ? styles['personalize-header-switcher']
    : undefined
  const headerClassname = cx(
    styles['personalize-modal-title'],
    'u-flex u-flex-row u-flex-items-center u-flex-justify-end u-m-1'
  )

  const [tabSelected, setTabSelected] = useState(0)

  const tabs = [
    {
      label: 'Wallpaper',
      icon: <PaletteIcon />,
      onClick: () => {
        setTabSelected(0)
      },
      enabled: false,
      component: <Wallpaper client={client} />
    },
    ...(flag('home.widgets.enabled')
      ? [
          {
            label: 'Widgets',
            icon: <MosaicIcon />,
            onClick: () => {
              setTabSelected(1)
            },
            enabled: false,
            component: <Widget client={client} />
          }
        ]
      : [])
  ]

  return (
    <div className="u-w-100 u-h-100 u-flex u-flex-column u-flex-items-center u-flex-items-end-t u-flex-items-end-t u-flex-items-end-s u-flex-justify-start u-pos-relative">
      <div className="u-w-100 u-flex u-flex-justify-end">
        <div className={headerClassname}>
          {tabs.map((tab, index) => (
            <Button
              key={tab.label}
              className={`u-bdrs-circle ${styles['personalizationTabButton']} ${
                tabSelected === index
                  ? styles['personalizationTabButton--selected']
                  : ''
              }`}
              label={<Icon icon={tab.icon} size={14} />}
              size="small"
              variant={'ghost'}
              onClick={tab.onClick}
            />
          ))}

          <div className={headerSwitcherClassname}>
            <ThemeSwitcher isAnimationComplete={isAnimationComplete} />
          </div>

          {showCloseButton && (
            <IconButton
              className="u-ml-half"
              onClick={onClose}
              aria-label="Close wallpaper personalization dialog"
              size="small"
            >
              <Icon icon={CrossIcon} size={16} />
            </IconButton>
          )}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {tabs
          .filter((tab, index) => tab.component)
          .map((tab, index) => (
            <Transition
              in={tabSelected === index}
              timeout={0}
              key={tab.label}
              mountOnEnter
            >
              {state => (
                <div
                  key={tab.label}
                  className={`${styles[`personalization-tab`]} ${
                    styles[`personalization-tab--${state}`]
                  }`}
                >
                  {tab.component}
                </div>
              )}
            </Transition>
          ))}
      </div>
    </div>
  )
}
