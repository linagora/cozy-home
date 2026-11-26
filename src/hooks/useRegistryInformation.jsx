import { useState, useEffect } from 'react'

import { Registry } from 'cozy-client'
import log from 'cozy-logger'

/**
 * Fetches the registry information of an app.
 *
 * @param {import('cozy-client').default} client - cozy-client instance
 * @param {string} slug - slug of the app
 * @returns {object|null} the app information, null while loading or when the
 * registry could not be reached
 */
const useRegistryInformation = (client, slug) => {
  const [appData, setAppData] = useState(null)

  useEffect(() => {
    let cancelled = false
    const fetchData = async () => {
      const registry = new Registry({
        client
      })
      const app = await registry.fetchApp(slug)
      if (!cancelled) setAppData(app)
    }
    fetchData().catch(error => {
      log(
        'error',
        `Could not fetch the registry information of ${slug}: ${error}`
      )
      if (!cancelled) setAppData(null)
    })
    return () => {
      cancelled = true
    }
  }, [client, slug])

  return appData
}

export default useRegistryInformation
