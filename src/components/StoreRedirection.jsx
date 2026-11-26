import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useClient } from 'cozy-client'
import Intents from 'cozy-interapp'
import log from 'cozy-logger'
import Spinner from 'cozy-ui/transpiled/react/Spinner'

const StoreRedirection = () => {
  const client = useClient()
  const { category } = useParams()

  useEffect(() => {
    const intents = new Intents({ client })
    const options = { type: 'konnector' }
    if (category && category !== 'all') {
      options.category = category
    }
    intents.redirect('io.cozy.apps', options).catch(error => {
      log('error', `Could not redirect to the store: ${error}`)
    })
  }, [client, category])

  return <Spinner size="xxlarge" middle />
}

export default StoreRedirection
