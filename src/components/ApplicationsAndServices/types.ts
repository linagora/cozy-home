import React from 'react'

import UntypedAppIcon from 'cozy-ui-plus/dist/AppIcon'
import UntypedTextField from 'cozy-ui/transpiled/react/TextField'

import { LoadingAppTiles as UntypedLoadingAppTiles } from '@/components/Applications'

// Typed wrappers for cozy-ui(-plus) components that ship without usable TS
// types, kept here so the casts are declared once instead of in every file.

export const AppIcon = UntypedAppIcon as React.FC<{
  app: unknown
  type?: 'app' | 'konnector'
  className?: string
}>

export const TextField = UntypedTextField as React.FC<{
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  variant: string
}>

export const LoadingAppTiles = UntypedLoadingAppTiles as React.FC<{
  num: number
}>
