import uniqBy from 'lodash/uniqBy'

import { models } from 'cozy-client'
import type {
  IOCozyApp,
  IOCozyFile,
  IOCozyKonnector
} from 'cozy-client/types/types'

import homeConfig from '@/config/home.json'

const {
  applications: {
    sortApplicationsList,
    selectEntrypoints,
    checkEntrypointCondition
  }
} = models

type EntrypointCondition = Parameters<typeof checkEntrypointCondition>[0]

export interface Entrypoint {
  name: string
  slug: string
  hash: string
  title: Record<string, string>
  icon: string
  conditions?: EntrypointCondition[]
}

export interface AppItem {
  type: 'app'
  id: string
  app: IOCozyApp
}
export interface KonnectorItem {
  type: 'konnector'
  id: string
  konnector: IOCozyKonnector
  isInMaintenance: boolean
  isRunning: boolean
}
export interface ShortcutItem {
  type: 'shortcut'
  id: string
  file: IOCozyFile
}
export interface EntrypointItem {
  type: 'entrypoint'
  id: string
  entrypoint: Entrypoint
}
export interface SeparatorItem {
  type: 'separator'
  id: string
  label: string
}

export type HomeItem =
  | AppItem
  | KonnectorItem
  | ShortcutItem
  | EntrypointItem
  | SeparatorItem

export type SeparatorMap = Record<string, { label: string }>

const SEPARATOR_PREFIX = 'separator:'

export const makeAppId = (slug: string): string => `app:${slug}`
export const makeKonnectorId = (slug: string): string => `konnector:${slug}`
export const makeShortcutId = (fileId: string): string => `shortcut:${fileId}`
export const makeEntrypointId = (slug: string, name: string): string =>
  `entrypoint:${slug}:${name}`
export const makeSeparatorId = (): string =>
  `${SEPARATOR_PREFIX}${Date.now().toString(36)}${Math.random()
    .toString(36)
    .slice(2, 8)}`

export const isSeparatorId = (id: string): boolean =>
  id.startsWith(SEPARATOR_PREFIX)

interface AppFilters {
  sortSlugs: string[] | null
  hiddenSlugs: string[]
  hiddenHomeSlugs: string[]
}

export const buildAppItems = (
  apps: IOCozyApp[] | null | undefined,
  { sortSlugs, hiddenSlugs, hiddenHomeSlugs }: AppFilters
): AppItem[] => {
  if (!Array.isArray(apps) || apps.length === 0) return []

  const visible = apps.filter(
    app =>
      app.state !== 'hidden' &&
      !homeConfig.filteredApps.includes(app.slug) &&
      !hiddenSlugs.includes(app.slug.toLowerCase()) &&
      !hiddenHomeSlugs.includes(app.slug.toLowerCase())
  )
  const deduped = uniqBy(visible, 'slug')
  const sorted = (
    sortSlugs ? sortApplicationsList(deduped, sortSlugs) : deduped
  ) as IOCozyApp[]

  return sorted.map(app => ({ type: 'app', id: makeAppId(app.slug), app }))
}

export const buildKonnectorItems = (
  konnectors: IOCozyKonnector[],
  maintenanceSlugs: Set<string>,
  runningSlugs: string[]
): KonnectorItem[] =>
  konnectors.map(konnector => ({
    type: 'konnector',
    id: makeKonnectorId(konnector.slug),
    konnector,
    isInMaintenance: maintenanceSlugs.has(konnector.slug),
    isRunning: runningSlugs.includes(konnector.slug)
  }))

export const buildShortcutItems = (
  files: IOCozyFile[] | null | undefined
): ShortcutItem[] => {
  if (!Array.isArray(files)) return []
  return files.map(file => ({
    type: 'shortcut',
    id: makeShortcutId(file._id),
    file
  }))
}

// Mirrors the legacy home: only Drive OnlyOffice creation entrypoints,
// ignoring the top-bar flag condition
export const buildEntrypointItems = (
  apps: IOCozyApp[] | null | undefined
): EntrypointItem[] => {
  if (!Array.isArray(apps)) return []

  const drive = apps.find(app => app.slug === 'drive') as
    | (IOCozyApp & { entrypoints?: Entrypoint[] })
    | undefined
  if (!drive) return []

  const selected = selectEntrypoints(drive.entrypoints ?? [], [
    'new-file-type-text',
    'new-file-type-sheet',
    'new-file-type-slide'
  ]) as Entrypoint[]

  const filtered = selected.filter(entrypoint =>
    (entrypoint.conditions ?? []).every(condition => {
      if (
        condition.type === 'flag' &&
        condition.name === 'bar.onlyoffice.enabled'
      )
        return true
      return checkEntrypointCondition(condition)
    })
  )

  return filtered.map(entrypoint => ({
    type: 'entrypoint',
    id: makeEntrypointId(drive.slug, entrypoint.name),
    entrypoint: { ...entrypoint, slug: drive.slug }
  }))
}

// Separators live only through the saved order; their label is in the map
export const buildSeparatorItems = (
  order: string[],
  separators: SeparatorMap
): SeparatorItem[] =>
  order.filter(isSeparatorId).map(id => ({
    type: 'separator',
    id,
    label: separators[id]?.label ?? ''
  }))

export interface VisualRow {
  // flat-order-first (leftmost) tile id of the row, used as insertion anchor
  firstId: string
  centerY: number
}

// Places a separator on a whole-row boundary: the separator ends up after
// every visual row whose vertical center is above the pointer. Dragging it
// past a row therefore moves that entire row to the other side, instead of
// shuffling individual icons.
export const computeRowSnappedOrder = (
  base: string[],
  separatorId: string,
  rows: VisualRow[],
  pointerY: number
): string[] => {
  const without = base.filter(id => id !== separatorId)

  let rowsAbove = 0
  while (rowsAbove < rows.length && rows[rowsAbove].centerY < pointerY) {
    rowsAbove++
  }

  const anchorIndex =
    rowsAbove < rows.length ? without.indexOf(rows[rowsAbove].firstId) : -1
  const insertAt = anchorIndex < 0 ? without.length : anchorIndex

  const result = without.slice()
  result.splice(insertAt, 0, separatorId)
  return result
}

// Orders live items by the saved order: known ids first (in saved sequence),
// then new items in their default order; stale ids are dropped
export const orderItems = (order: string[], items: HomeItem[]): HomeItem[] => {
  if (order.length === 0) return items

  const byId = new Map(items.map(item => [item.id, item]))
  const placed = new Set<string>()
  const ordered: HomeItem[] = []

  for (const id of order) {
    const item = byId.get(id)
    if (item) {
      ordered.push(item)
      placed.add(id)
    }
  }
  for (const item of items) {
    if (!placed.has(item.id)) ordered.push(item)
  }
  return ordered
}
