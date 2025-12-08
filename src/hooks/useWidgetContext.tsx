import React, { createContext, useContext, useState, useCallback } from 'react'
import localForage from 'localforage'

interface WidgetContextType {
  installedWidgets: string[]
  installWidget: (slug: string) => void
  uninstallWidget: (slug: string) => void
  moveWidget: (slug: string, newPosition: number) => void
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined)

export const WidgetProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [installedWidgets, setInstalledWidgets] = useState<string[]>([])

  React.useEffect(() => {
    void localForage
      .getItem<string[]>('installedWidgets')
      .then(widgets => {
        if (widgets && Array.isArray(widgets)) {
          setInstalledWidgets(widgets)
        }
        return undefined
      })
      .catch(error => {
        throw new Error(`Failed to load installed widgets: ${String(error)}`)
      })
  }, [])

  React.useEffect(() => {
    void localForage.setItem('installedWidgets', installedWidgets)
  }, [installedWidgets])

  const installWidget = useCallback((slug: string) => {
    setInstalledWidgets(prev => {
      if (prev.includes(slug)) return prev
      return [...prev, slug]
    })
  }, [])

  const uninstallWidget = useCallback((slug: string) => {
    setInstalledWidgets(prev => prev.filter(w => w !== slug))
  }, [])

  const moveWidget = useCallback((slug: string, newPosition: number) => {
    setInstalledWidgets(prev => {
      const currentIndex = prev.indexOf(slug)
      if (currentIndex === -1) return prev

      const newWidgets = [...prev]
      const [removed] = newWidgets.splice(currentIndex, 1)

      // Ensure newPosition is within bounds
      const targetPosition = Math.max(
        0,
        Math.min(newPosition, newWidgets.length)
      )

      newWidgets.splice(targetPosition, 0, removed)
      return newWidgets
    })
  }, [])

  const value = {
    installedWidgets,
    installWidget,
    uninstallWidget,
    moveWidget
  }

  return (
    <WidgetContext.Provider value={value}>{children}</WidgetContext.Provider>
  )
}

export const useWidgetContext = (): WidgetContextType => {
  const context = useContext(WidgetContext)
  if (context === undefined) {
    throw new Error('useWidgetContext must be used within a WidgetProvider')
  }
  return context
}
