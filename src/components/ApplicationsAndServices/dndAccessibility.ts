import type { Announcements, ScreenReaderInstructions } from '@dnd-kit/core'

import { models } from 'cozy-client'

import type { GridItem } from './types'

const {
  applications: { getAppDisplayName },
  file: { splitFilename }
} = models

type Translate = (key: string, options?: Record<string, unknown>) => string

/**
 * Visible label of a tile, as read by the user (never an internal id such as
 * "app:store").
 */
export const getItemLabel = (
  item: GridItem,
  t: Translate,
  lang: string
): string => {
  switch (item.type) {
    case 'app':
      return getAppDisplayName(item.app, lang) || item.app.slug
    case 'konnector':
      return item.konnector.name || item.konnector.slug
    case 'shortcut':
      return (splitFilename(item.file) as { filename: string }).filename
    case 'entrypoint':
      return item.entrypoint.title[lang] || item.entrypoint.title.en
    case 'folder':
      return item.name.trim() || t('folder.default_name')
    default:
      return ''
  }
}

/**
 * Translated screen reader instructions and announcements of the drag and
 * drop, naming the tiles by their label.
 */
export const makeDndAccessibility = (
  items: GridItem[],
  t: Translate,
  lang: string
): {
  screenReaderInstructions: ScreenReaderInstructions
  announcements: Announcements
} => {
  const labels = new Map<string, string>()
  const addLabels = (list: GridItem[]): void => {
    list.forEach(item => {
      labels.set(item.id, getItemLabel(item, t, lang))
      if (item.type === 'folder') addLabels(item.items)
    })
  }
  addLabels(items)
  const label = (id: string | number): string =>
    labels.get(String(id)) ?? String(id)

  return {
    screenReaderInstructions: { draggable: t('dnd.instructions') },
    announcements: {
      onDragStart: ({ active }): string =>
        t('dnd.picked_up', { item: label(active.id) }),
      onDragOver: ({ active, over }): string | undefined => {
        if (!over) return t('dnd.moved_out', { item: label(active.id) })
        if (over.id === active.id) return undefined
        return t('dnd.moved_over', {
          item: label(active.id),
          target: label(over.id)
        })
      },
      onDragEnd: ({ active, over }): string =>
        over && over.id !== active.id
          ? t('dnd.dropped_over', {
              item: label(active.id),
              target: label(over.id)
            })
          : t('dnd.dropped', { item: label(active.id) }),
      onDragCancel: ({ active }): string =>
        t('dnd.cancelled', { item: label(active.id) })
    }
  }
}
