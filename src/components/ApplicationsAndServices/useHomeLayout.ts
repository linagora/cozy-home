import keyBy from 'lodash/keyBy'
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
  HomeLayout,
  TileItem,
  buildAppItems,
  buildEntrypointItems,
  buildKonnectorItems,
  buildShortcutItems
} from './homeLayout'

import {
  fetchRunningKonnectors,
  getRunningKonnectors
} from '@/lib/konnectors_typed'
import { appsConn } from '@/queries'
import { getInstalledKonnectors } from '@/selectors/konnectors'

const EMPTY_LAYOUT: HomeLayout = { order: [], folders: {} }
const toArray = (v: unknown): string[] =>
  Array.isArray(v) ? (v as string[]) : []
const toArrayOrNull = (v: unknown): string[] | null =>
  Array.isArray(v) ? (v as string[]) : null

interface SettingsShape {
  query: { fetchStatus: string; lastFetch?: number }
  values?: { homeLayout?: HomeLayout }
  save: (data: { homeLayout: HomeLayout }) => void
}

export interface UseHomeLayout {
  hasLoaded: boolean
  isAppsLoading: boolean
  items: TileItem[]
  layout: HomeLayout
  apps: IOCozyApp[]
  saveLayout: (layout: HomeLayout) => void
}

export const useHomeLayout = (): UseHomeLayout => {
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
    'homeLayout'
  ]) as unknown as SettingsShape
  const layout = values?.homeLayout ?? EMPTY_LAYOUT

  const sortSlugs = toArrayOrNull(flag('apps.sort'))
  const hiddenSlugs = toArray(flag('apps.hidden'))
  const hiddenHomeSlugs = toArray(flag('apps.hidden-in-home'))

  const items = useMemo(
    (): TileItem[] => [
      ...buildAppItems(apps, { sortSlugs, hiddenSlugs, hiddenHomeSlugs }),
      ...buildKonnectorItems(
        sortBy(installedKonnectors ?? [], k => k.name.toLowerCase()),
        new Set(Object.keys(keyBy(maintenance, 'slug'))),
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
    isAppsLoading: !Array.isArray(apps),
    items,
    layout,
    apps: apps ?? [],
    saveLayout: next => save({ homeLayout: next })
  }
}
