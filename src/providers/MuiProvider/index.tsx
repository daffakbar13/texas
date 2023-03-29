import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@texas/styles/theme'
import React from 'react'
import ReactQueryWrapper from '../ReactQueryProvider'

export default function MuiProvider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </ThemeProvider>
  )
}
