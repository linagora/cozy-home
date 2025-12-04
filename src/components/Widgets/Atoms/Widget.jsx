import React from 'react'

import { useCozyTheme } from 'cozy-ui/transpiled/react/providers/CozyTheme'

import styles from './widget.styl'

export const Widget = ({ children }) => {
  const { type } = useCozyTheme()

  try {
    return (
      <div
        className={`${styles[`app-widget`]} ${
          styles[`app-widget-background--${type}`]
        } u-flex u-flex-column u-mh-auto u-bdrs-8`}
      >
        <div className={`${styles[`app-widget-children`]}`}>{children}</div>
      </div>
    )
  } catch (e) {
    throw new Error('Error rendering Widget component', e)
  }
}

export default Widget
