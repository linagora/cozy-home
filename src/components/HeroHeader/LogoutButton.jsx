import React, { useCallback, useState } from 'react'

import { Logout } from '@linagora/twake-icons'
import { useClient } from 'cozy-client'
import { isFlagshipApp } from 'cozy-device-helper'
import { useWebviewIntent } from 'cozy-intent'
import { useI18n } from 'twake-i18n'

import CornerButton from './CornerButton'

import { LogoutDialog } from '@/components/HeroHeader/LogoutModal'

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const client = useClient()
  const webviewIntent = useWebviewIntent()
  const { t } = useI18n()

  const handleConfirm = useCallback(async () => {
    await client.logout()

    return webviewIntent?.call('logout') || window.location.reload()
  }, [client, webviewIntent])

  const handleButton = useCallback(
    () => (isFlagshipApp() ? setIsOpen(true) : handleConfirm()),
    [handleConfirm]
  )

  return (
    <>
      <LogoutDialog
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={handleConfirm}
      />

      <CornerButton label={t('logout')} icon={Logout} onClick={handleButton} />
    </>
  )
}

export default LogoutButton
