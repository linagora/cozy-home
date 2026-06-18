import omit from 'lodash/omit'
import sortBy from 'lodash/sortBy'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import {
  useAppsInMaintenance,
  useFetchHomeShortcuts,
  useQuery,
  useSettings
} from 'cozy-client'
import type { IOCozyApp, IOCozyKonnector } from 'cozy-client/types/types'
import flag from 'cozy-flags'

import {
  HomeItem,
  SeparatorMap,
  buildAppItems,
  buildEntrypointItems,
  buildKonnectorItems,
  buildShortcutItems
} from './homeItems'

import {
  fetchRunningKonnectors,
  getRunningKonnectors
} from '@/lib/konnectors_typed'
import { appsConn } from '@/queries'
import { getInstalledKonnectors } from '@/selectors/konnectors'

interface SettingsShape {
  query: { fetchStatus: string; lastFetch?: number }
  values?: { tilesOrder?: string[]; separators?: SeparatorMap }
  save: (data: { tilesOrder?: string[]; separators?: SeparatorMap }) => void
}

const EMPTY_ORDER: string[] = []
const EMPTY_SEPARATORS: SeparatorMap = {}

// A flag may be configured as a non-array (e.g. boolean false to mean "none").
// Normalize to a stable string[] so `.includes()` never throws and the value
// keeps a stable reference for useMemo deps.
const toSlugArray = (value: unknown): string[] =>
  Array.isArray(value) ? (value as string[]) : EMPTY_ORDER
const toSlugArrayOrNull = (value: unknown): string[] | null =>
  Array.isArray(value) ? (value as string[]) : null

export interface HomeLayout {
  hasLoaded: boolean
  isAppsLoading: boolean
  // Tiles currently installed (apps, konnectors, shortcuts, entrypoints),
  // without separators and without ordering applied
  liveItems: HomeItem[]
  order: string[]
  separators: SeparatorMap
  apps: IOCozyApp[]
  saveOrder: (order: string[]) => void
  addSeparator: (id: string, order: string[]) => void
  renameSeparator: (id: string, label: string) => void
  removeSeparator: (id: string, order: string[]) => void
}

export const useHomeLayout = (): HomeLayout => {
  const { data: apps } = useQuery(appsConn.query, appsConn) as {
    data: IOCozyApp[] | null
  }
  const shortcuts = useFetchHomeShortcuts() as
    | Parameters<typeof buildShortcutItems>[0]
    | null
  const maintenance = useAppsInMaintenance() as unknown as IOCozyKonnector[]
  const installedKonnectors = useSelector(getInstalledKonnectors) as
    | IOCozyKonnector[]
    | null
  const { data: jobData } = useQuery(
    fetchRunningKonnectors.definition,
    fetchRunningKonnectors.options
  )

  const { query, values, save } = useSettings('home', [
    'tilesOrder',
    'separators'
  ]) as unknown as SettingsShape

  const order = values?.tilesOrder ?? EMPTY_ORDER
  const separators = values?.separators ?? EMPTY_SEPARATORS

  const sortSlugs = toSlugArrayOrNull(flag('apps.sort'))
  const hiddenSlugs = toSlugArray(flag('apps.hidden'))
  const hiddenHomeSlugs = toSlugArray(flag('apps.hidden-in-home'))

  const liveItems = useMemo(
    (): HomeItem[] => [
      ...buildAppItems(apps, {
        sortSlugs,
        hiddenSlugs,
        hiddenHomeSlugs
      }),
      ...buildKonnectorItems(
        sortBy(installedKonnectors ?? [], k => k.name.toLowerCase()),
        new Set(maintenance.map(k => k.slug)),
        getRunningKonnectors(jobData)
      ),
      ...buildShortcutItems(shortcuts),
      ...buildEntrypointItems(apps)
    ],
    [
      apps,
      shortcuts,
      maintenance,
      installedKonnectors,
      jobData,
      sortSlugs,
      hiddenSlugs,
      hiddenHomeSlugs
    ]
  )

  return {
    hasLoaded: query.fetchStatus === 'loaded' || Boolean(query.lastFetch),
    isAppsLoading: !Array.isArray(apps) || apps.length === 0,
    liveItems,
    order,
    separators,
    apps: apps ?? [],
    saveOrder: newOrder => save({ tilesOrder: newOrder }),
    addSeparator: (id, newOrder) =>
      save({
        tilesOrder: newOrder,
        separators: { ...separators, [id]: { label: '' } }
      }),
    renameSeparator: (id, label) =>
      save({ separators: { ...separators, [id]: { label } } }),
    removeSeparator: (id, newOrder) =>
      save({
        tilesOrder: newOrder.filter(tileId => tileId !== id),
        separators: omit(separators, id)
      })
  }
}
