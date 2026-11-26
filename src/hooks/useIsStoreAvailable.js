import { useQuery } from 'cozy-client'
import flag from 'cozy-flags'

import { appsConn } from '@/queries'

/**
 * Whether links to the Store can be shown: the Store app is installed (some
 * deployments have none) and not hidden with the `apps.hidden` flag.
 *
 * @param {Array<{ slug: string }>} [apps] - installed apps, when already known
 * @returns {boolean}
 */
export const isStoreAvailable = apps => {
  const hiddenApps = flag('apps.hidden') || []
  const isStoreInstalled = (apps || []).some(({ slug }) => slug === 'store')
  return isStoreInstalled && !hiddenApps.includes('store')
}

export const useIsStoreAvailable = () => {
  const { data: apps } = useQuery(appsConn.query, appsConn)
  return isStoreAvailable(apps)
}
