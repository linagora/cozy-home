import { initTranslation } from 'twake-i18n/dist/translation'

import { makeDndAccessibility } from './dndAccessibility'
import { GridItem } from './types'

import enLocale from '@/locales/en.json'

// The translation function of the app, on the English locale
const polyglot = initTranslation('en', () => enLocale, undefined) as {
  t: (key: string, options?: Record<string, unknown>) => string
}
const t = polyglot.t.bind(polyglot)

const grid: GridItem[] = [
  {
    type: 'app',
    id: 'app:store',
    app: { slug: 'store', name: 'Store' } as never
  },
  {
    type: 'folder',
    id: 'folder:x',
    name: 'Banks',
    items: [
      {
        type: 'konnector',
        id: 'konnector:freemobile',
        konnector: { slug: 'freemobile', name: 'Free Mobile' } as never,
        isInMaintenance: false,
        isRunning: false
      }
    ]
  }
]

describe('makeDndAccessibility', () => {
  const { screenReaderInstructions, announcements } = makeDndAccessibility(
    grid,
    t,
    'en'
  )
  const active = { id: 'app:store' } as never
  const over = (id: string): never => ({ id }) as never

  it('gives translated instructions', () => {
    expect(screenReaderInstructions.draggable).toBe(enLocale.dnd.instructions)
  })

  it('names tiles by their label, not by their internal id', () => {
    const texts = [
      announcements.onDragStart({ active }),
      announcements.onDragOver({ active, over: over('folder:x') }),
      announcements.onDragOver({ active, over: over('konnector:freemobile') }),
      announcements.onDragEnd({ active, over: over('folder:x') }),
      announcements.onDragCancel({ active, over: null })
    ] as string[]

    expect(texts).toEqual([
      'Picked up Store.',
      'Store was moved over Banks.',
      'Store was moved over Free Mobile.',
      'Store was dropped over Banks.',
      'Moving was cancelled. Store went back to its place.'
    ])
    texts.forEach(text => expect(text).not.toMatch(/app:|folder:|konnector:/))
  })

  it('does not announce a tile moving over itself', () => {
    expect(
      announcements.onDragOver({ active, over: over('app:store') })
    ).toBeUndefined()
    expect(announcements.onDragEnd({ active, over: over('app:store') })).toBe(
      'Store was dropped.'
    )
  })
})
