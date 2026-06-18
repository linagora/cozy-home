import type { IOCozyApp, IOCozyKonnector } from 'cozy-client/types/types'

import {
  AppItem,
  buildAppItems,
  buildKonnectorItems,
  buildSeparatorItems,
  buildShortcutItems,
  computeRowSnappedOrder,
  isSeparatorId,
  makeAppId,
  makeSeparatorId,
  orderItems
} from './homeItems'

const makeApp = (slug: string, state = 'ready'): IOCozyApp =>
  ({ slug, state }) as unknown as IOCozyApp

const appItem = (slug: string): AppItem => ({
  type: 'app',
  id: makeAppId(slug),
  app: makeApp(slug)
})

describe('buildAppItems', () => {
  const noFilters = { sortSlugs: null, hiddenSlugs: [], hiddenHomeSlugs: [] }

  it('returns an empty array without apps', () => {
    expect(buildAppItems(null, noFilters)).toEqual([])
    expect(buildAppItems([], noFilters)).toEqual([])
  })

  it('filters hidden apps, home-hidden apps, hidden state and the home app', () => {
    const items = buildAppItems(
      [
        makeApp('drive'),
        makeApp('ghost', 'hidden'),
        makeApp('banks'),
        makeApp('photos'),
        makeApp('home')
      ],
      { sortSlugs: null, hiddenSlugs: ['banks'], hiddenHomeSlugs: ['photos'] }
    )
    expect(items.map(i => i.id)).toEqual(['app:drive'])
  })

  it('deduplicates apps sharing a slug', () => {
    expect(
      buildAppItems([makeApp('drive'), makeApp('drive')], noFilters)
    ).toHaveLength(1)
  })

  it('applies the sort flag, unknown slugs last', () => {
    const items = buildAppItems(
      [makeApp('notes'), makeApp('drive'), makeApp('zzz')],
      { ...noFilters, sortSlugs: ['drive', 'notes'] }
    )
    expect(items.map(i => i.id)).toEqual(['app:drive', 'app:notes', 'app:zzz'])
  })
})

describe('buildKonnectorItems', () => {
  it('flags maintenance and running konnectors', () => {
    const konnectors = [
      { slug: 'alan', name: 'Alan' },
      { slug: 'edf', name: 'EDF' }
    ] as unknown as IOCozyKonnector[]

    const items = buildKonnectorItems(konnectors, new Set(['edf']), ['alan'])

    expect(items).toEqual([
      {
        type: 'konnector',
        id: 'konnector:alan',
        konnector: konnectors[0],
        isInMaintenance: false,
        isRunning: true
      },
      {
        type: 'konnector',
        id: 'konnector:edf',
        konnector: konnectors[1],
        isInMaintenance: true,
        isRunning: false
      }
    ])
  })
})

describe('buildShortcutItems', () => {
  it('builds ids from the file id', () => {
    expect(
      buildShortcutItems([{ _id: 'abc' }] as never).map(i => i.id)
    ).toEqual(['shortcut:abc'])
  })
  it('returns an empty array when not loaded', () => {
    expect(buildShortcutItems(null)).toEqual([])
  })
})

describe('separators', () => {
  it('generates unique ids', () => {
    const id = makeSeparatorId()
    expect(isSeparatorId(id)).toBe(true)
    expect(id).not.toEqual(makeSeparatorId())
  })

  it('builds separator items from the order, with their label', () => {
    const items = buildSeparatorItems(
      ['app:drive', 'separator:a', 'separator:b'],
      {
        'separator:a': { label: 'Travail' }
      }
    )
    expect(items).toEqual([
      { type: 'separator', id: 'separator:a', label: 'Travail' },
      { type: 'separator', id: 'separator:b', label: '' }
    ])
  })
})

describe('computeRowSnappedOrder', () => {
  // two visual rows: [a,b,c] centerY 100, [d,e,f] centerY 200
  const base = ['a', 'b', 'c', 'sep', 'd', 'e', 'f']
  const rows = [
    { firstId: 'a', centerY: 100 },
    { firstId: 'd', centerY: 200 }
  ]

  it('moves the separator above every row when the pointer is at the top', () => {
    expect(computeRowSnappedOrder(base, 'sep', rows, 50)).toEqual([
      'sep',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f'
    ])
  })

  it('snaps the separator between two rows', () => {
    expect(computeRowSnappedOrder(base, 'sep', rows, 150)).toEqual([
      'a',
      'b',
      'c',
      'sep',
      'd',
      'e',
      'f'
    ])
  })

  it('moves the separator below every row when the pointer is at the bottom', () => {
    expect(computeRowSnappedOrder(base, 'sep', rows, 250)).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'sep'
    ])
  })

  it('inserts a brand new separator id (source drag) at the boundary', () => {
    expect(
      computeRowSnappedOrder(
        ['a', 'b', 'c', 'd'],
        'new',
        [
          { firstId: 'a', centerY: 100 },
          { firstId: 'c', centerY: 200 }
        ],
        150
      )
    ).toEqual(['a', 'b', 'new', 'c', 'd'])
  })
})

describe('orderItems', () => {
  it('keeps the default order when nothing is saved', () => {
    const items = [appItem('drive'), appItem('notes')]
    expect(orderItems([], items)).toEqual(items)
  })

  it('reorders to match the saved order', () => {
    const items = [appItem('drive'), appItem('notes')]
    expect(
      orderItems(['app:notes', 'app:drive'], items).map(i => i.id)
    ).toEqual(['app:notes', 'app:drive'])
  })

  it('drops stale ids and appends new items in default order', () => {
    const items = [appItem('drive'), appItem('fresh')]
    expect(orderItems(['app:gone', 'app:drive'], items).map(i => i.id)).toEqual(
      ['app:drive', 'app:fresh']
    )
  })
})
