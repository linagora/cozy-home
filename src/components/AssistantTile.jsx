import React from 'react'

import { Icon, Assistant } from '@linagora/twake-icons'
import { AssistantLink } from 'cozy-search'
import SquareAppIcon from 'cozy-ui-plus/dist/SquareAppIcon'

import TileButton from '@/components/TileButton'

/**
 * AssistantTile component.
 *
 * @returns {JSX.Element} The rendered AssistantTile component.
 */
const AssistantTile = () => {
  return (
    <AssistantLink>
      {({ openAssistant }) => (
        <TileButton onClick={openAssistant}>
          <SquareAppIcon
            name="Assistant"
            IconContent={
              <Icon icon={Assistant} size={24} color="var(--primaryColor)" />
            }
          />
        </TileButton>
      )}
    </AssistantLink>
  )
}

export default AssistantTile
