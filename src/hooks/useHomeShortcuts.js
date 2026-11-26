import { useQuery } from 'cozy-client'

import { useMagicFolder } from '@/components/Sections/hooks/useMagicFolder'
import { mkHomeShortcutsConn } from '@/queries'

const EMPTY = []

/**
 * Shortcuts at the root of the /Settings/Home magic folder.
 *
 * The shortcuts are read with a cozy-client query, so creations, updates and
 * deletions (from Home, or received through realtime) are shown without a
 * page reload.
 *
 * @returns {import('cozy-client/types/types').IOCozyFile[]} shortcut files
 */
export const useHomeShortcuts = () => {
  const magicFolderId = useMagicFolder()
  const conn = mkHomeShortcutsConn(magicFolderId)
  const { data } = useQuery(conn.query, {
    ...conn.options,
    enabled: Boolean(magicFolderId)
  })

  if (!magicFolderId || !Array.isArray(data)) return EMPTY
  return data
}
