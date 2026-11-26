import React, { useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

import {
  useClient,
  useQuery,
  isQueryLoading,
  hasQueryBeenLoaded
} from 'cozy-client'
import Intents from 'cozy-interapp'
import log from 'cozy-logger'

import { konnectorsConn } from '@/queries'

const IntentRedirect = () => {
  const client = useClient()
  const [searchParams] = useSearchParams()
  const queryConnector = searchParams.get('konnector')
  const queryAccount = searchParams.get('account')
  const konnectorsDataResult = useQuery(konnectorsConn.query, konnectorsConn)

  const isLoading =
    isQueryLoading(konnectorsDataResult) &&
    !hasQueryBeenLoaded(konnectorsDataResult)

  const isInstalled =
    !isLoading &&
    !!queryConnector &&
    !!(konnectorsDataResult.data || []).find(
      konnector => konnector.slug === queryConnector
    )

  const shouldRedirectToStore = !isLoading && !!queryConnector && !isInstalled

  useEffect(() => {
    if (!shouldRedirectToStore) return
    const intents = new Intents({ client })
    intents.redirect('io.cozy.apps', { slug: queryConnector }).catch(error => {
      log(
        'error',
        `Could not redirect to the store for ${queryConnector}: ${error}`
      )
    })
  }, [client, queryConnector, shouldRedirectToStore])

  if (isLoading || shouldRedirectToStore) return null

  if (!queryConnector) return <Navigate to="/connected" />

  const konnectorRoute = `/connected/${queryConnector}`
  const redirectRoute = queryAccount
    ? `${konnectorRoute}/accounts/${queryAccount}`
    : konnectorRoute

  return <Navigate to={redirectRoute} />
}

export default IntentRedirect
