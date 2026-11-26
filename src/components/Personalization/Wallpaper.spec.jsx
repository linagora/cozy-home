import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Wallpaper from './Wallpaper'
import { isDecodableImage } from './wallpaperUtils'

import { useWallpaperContext } from '@/hooks/useWallpaperContext'
import AppLike from '@/test/AppLike'

jest.mock('@/hooks/useWallpaperContext', () => ({
  useWallpaperContext: jest.fn()
}))
jest.mock('./wallpaperUtils', () => ({
  ...jest.requireActual('./wallpaperUtils'),
  isDecodableImage: jest.fn()
}))

const makeContext = data => ({
  data: { wallpaperLink: null, binaryCustomWallpaper: null, ...data },
  setWallpaperLink: jest.fn(),
  returnToDefaultWallpaper: jest.fn(),
  clearCustomWallpaper: jest.fn().mockResolvedValue(),
  saveCustomWallpaper: jest.fn().mockResolvedValue()
})

const setup = context => {
  useWallpaperContext.mockReturnValue(context)
  return render(
    <AppLike>
      <Wallpaper />
    </AppLike>
  )
}

const selectedCards = () =>
  screen
    .getAllByRole('button', { pressed: true })
    .map(button => button.textContent)

describe('Wallpaper', () => {
  it('renders each wallpaper as a button that can be focused', () => {
    setup(makeContext())
    const card = screen.getByRole('button', { name: /Orbital Blue/ })
    card.focus()
    expect(card).toHaveFocus()
  })

  it('frames the default wallpaper when there is no custom wallpaper', () => {
    setup(makeContext())
    expect(selectedCards()).toEqual(['Twake Default'])
  })

  it('frames the Import card when an imported image is the wallpaper (after a remount)', () => {
    setup(makeContext({ binaryCustomWallpaper: 'blob:http://cozy/123' }))
    expect(selectedCards()).toEqual(['Import'])
    expect(
      screen.getByRole('button', { name: 'Remove the imported wallpaper' })
    ).toBeInTheDocument()
  })

  it('frames a preset wallpaper chosen from its link', () => {
    setup(
      makeContext({
        wallpaperLink: '/assets/backgrounds/bg_twp_orbitalblue.jpg'
      })
    )
    expect(selectedCards()).toEqual(['Orbital Blue'])
  })

  it('refuses a file that is not a decodable image', async () => {
    const context = makeContext()
    isDecodableImage.mockResolvedValue(false)
    const { container } = setup(context)
    const input = container.querySelector('input[type=file]')
    const file = new File(['not really a png'], 'fake.png', {
      type: 'image/png'
    })

    await act(async () => {
      fireEvent.change(input, { target: { files: [file] } })
    })

    expect(context.saveCustomWallpaper).not.toHaveBeenCalled()
    expect(
      await screen.findByText(/This file cannot be used as a wallpaper/)
    ).toBeInTheDocument()
  })

  it('tells the user about an unsupported file type', async () => {
    const context = makeContext()
    const { container } = setup(context)
    const input = container.querySelector('input[type=file]')
    const file = new File(['<svg/>'], 'image.svg', { type: 'image/svg+xml' })

    await act(async () => {
      fireEvent.change(input, { target: { files: [file] } })
    })

    expect(context.saveCustomWallpaper).not.toHaveBeenCalled()
    expect(
      await screen.findByText(/This file cannot be used as a wallpaper/)
    ).toBeInTheDocument()
  })

  it('tells the user when the import fails', async () => {
    const context = makeContext()
    context.saveCustomWallpaper.mockRejectedValue(new Error('network'))
    isDecodableImage.mockResolvedValue(true)
    const { container } = setup(context)
    const input = container.querySelector('input[type=file]')
    const file = new File(['png'], 'image.png', { type: 'image/png' })

    await act(async () => {
      fireEvent.change(input, { target: { files: [file] } })
    })

    expect(
      await screen.findByText(
        'The wallpaper could not be imported. Please try again.'
      )
    ).toBeInTheDocument()
  })
})
