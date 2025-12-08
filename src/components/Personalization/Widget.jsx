import React from 'react'

import Typography from 'cozy-ui/transpiled/react/Typography'
import List from 'cozy-ui/transpiled/react/List'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import Switch from 'cozy-ui/transpiled/react/Switch'
import { ListItemIcon } from '@material-ui/core'
import { AppIcon } from 'cozy-ui-plus/dist/AppIcon'
import { AvailableWidgets } from '../Widgets/WidgetsWrapper'

import { appsConn } from '@/queries'
import { useQuery } from 'cozy-client'
import { useWidgetContext } from '@/hooks/useWidgetContext'

const Widget = ({ client }) => {
  const { data: apps } = useQuery(appsConn.query, appsConn)

  const {
    installedWidgets,
    installWidget: contextInstallWidget,
    uninstallWidget: contextUninstallWidget
  } = useWidgetContext()

  const getAppBySlug = slug => {
    return apps?.find(app => app.slug === slug)
  }

  const AllWidgets = Object.values(AvailableWidgets)

  return (
    <div>
      <List style={{ padding: 0 }}>
        {AllWidgets.map((widget, index) => (
          <ListItem dense button key={index} onClick={() => {}}>
            <ListItemIcon>
              <div
                style={{
                  width: 32,
                  height: 32
                }}
              >
                <AppIcon
                  app={widget.name}
                  client={client}
                  priority="registry"
                  type="app"
                />
              </div>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
                {getAppBySlug(widget.name)?.name || widget.name}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction className="u-mr-1">
              <Switch
                checked={installedWidgets.includes(widget.name)}
                onClick={() => {
                  if (installedWidgets.includes(widget.name)) {
                    contextUninstallWidget(widget.name)
                  } else {
                    contextInstallWidget(widget.name)
                  }
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Widget
