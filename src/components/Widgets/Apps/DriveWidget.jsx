import React from 'react'
import Widget from '../Atoms/Widget'
import { DriveWidgetView } from './Views/DriveWidgetView'
import { useClient } from 'cozy-client'

export const DriveWidget = ({ layoutControls, i }) => {
  const client = useClient()

  return (
    <Widget {...WidgetProps}>
      <DriveWidgetView
        app={WidgetProps.app}
        layoutControls={layoutControls}
        index={i}
        client={client}
      />
    </Widget>
  )
}

export const WidgetProps = {
  title: 'Drive',
  app: 'drive',
  headerShown: true,
  link: 'drive'
}
