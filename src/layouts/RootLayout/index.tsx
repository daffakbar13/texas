import { Box } from '@mui/material'
import React from 'react'

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <Box
      width="100%"
      maxWidth={480}
      height="100vh"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
      margin="auto"
    >
      {children}
    </Box>
  )
}
