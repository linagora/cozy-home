import React from 'react'
import Widget from '../Atoms/Widget'
import { PapillonWidgetView } from './Views/PapillonWidgetView'

export const PapillonWidget = ({ app, layoutControls, i }) => {
  return (
    <Widget {...WidgetProps}>
      <PapillonWidgetView app={app} layoutControls={layoutControls} index={i} />
    </Widget>
  )
}

export const WidgetProps = {
  title: 'Papillon',
  app: 'papillon',
  headerShown: true,
  link: 'papillon'
}
