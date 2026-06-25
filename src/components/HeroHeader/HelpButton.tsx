import { Help } from '@linagora/twake-icons'
import React from 'react'

import { useInstanceInfo } from 'cozy-client'
import { useI18n } from 'twake-i18n'

import CornerButton from './CornerButton'

const HelpButton = (): JSX.Element | null => {
  const { t } = useI18n()

  const { isLoaded, context } = useInstanceInfo()

  if (!isLoaded) return null

  const link = context.data?.help_link || t('help_link')

  return (
    <CornerButton
      href={link}
      icon={Help}
      label={t('help')}
      rel="noopener noreferrer"
      target="_blank"
    />
  )
}

export default HelpButton
