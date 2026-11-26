import { getSafeShortcutHref, isValidShortcutUrl } from './shortcuts'

describe('isValidShortcutUrl', () => {
  it.each(['https://linagora.com', 'http://localhost:8080/path?q=1'])(
    'accepts %s',
    url => {
      expect(isValidShortcutUrl(url)).toBe(true)
    }
  )

  it.each([
    'javascript:alert(document.domain)',
    'data:text/html,<script>alert(1)</script>',
    'https://not a url'
  ])('refuses %s', url => {
    expect(isValidShortcutUrl(url)).toBe(false)
  })
})

describe('getSafeShortcutHref', () => {
  it('keeps a web URL with a space, which an existing file may hold', () => {
    expect(getSafeShortcutHref('https://linagora.com/a b')).toBe(
      'https://linagora.com/a b'
    )
  })
})
