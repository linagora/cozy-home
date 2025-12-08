import React from 'react'

import styles from './widgets.styl'

import {
  DriveWidget,
  WidgetProps as DriveWidgetProps
} from './Apps/DriveWidget'

import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

import { useWidgetContext } from '@/hooks/useWidgetContext'

export const AvailableWidgets = {
  /* clock: {
    name: 'clock',
    component: ClockWidget,
    props: ClockWidgetProps
  },
  papillon: {
    name: 'papillon',
    component: PapillonWidget,
    props: PapillonWidgetProps
  }, */
  drive: {
    name: 'drive',
    component: DriveWidget,
    props: DriveWidgetProps
  }
}

export const WidgetsWrapper = () => {
  const { isMobile } = useBreakpoints()

  const {
    installedWidgets,
    uninstallWidget: contextUninstallWidget,
    moveWidget
  } = useWidgetContext()

  const uninstallWidget = widgetIndex => {
    contextUninstallWidget(widgetIndex)
  }

  const reorderWidget = (fromIndex, displaceBy) => {
    moveWidget(installedWidgets[fromIndex], fromIndex + displaceBy)
  }

  const layoutControls = (index, command) => {
    // console.log(index, command)
    switch (command) {
      case 'up':
        return reorderWidget(index, -1)
      case 'down':
        return reorderWidget(index, 1)
      case 'uninstall': {
        const widgetIndex = installedWidgets[index]
        return uninstallWidget(widgetIndex)
      }
      default:
        return
    }
  }

  if (installedWidgets.length === 0) {
    return null
  }

  return (
    <>
      <div
        className={`app-list-wrapper ${styles[`app-widget-container`]} u-flex ${
          isMobile ? 'u-flex-column u-ph-1' : 'u-flex-row'
        } u-mh-auto ${!isMobile ? 'u-mb-3' : 'u-mb-2'}`}
      >
        {installedWidgets.map((widgetIndex, i) => {
          const WidgetComponent = AvailableWidgets[widgetIndex].component
          return (
            <WidgetComponent
              key={widgetIndex}
              i={[i, installedWidgets.length]}
              layoutControls={command => {
                layoutControls(i, command)
              }}
            />
          )
        })}
      </div>
    </>
  )
}

export default WidgetsWrapper
