import { Box } from '@mui/material'
import { useMainStore } from '@texas/utils/stores'
import React from 'react'

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props
  const { maxContentWidth } = useMainStore()

  return (
    <Box
      id="root-layout"
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth={maxContentWidth}
      height="100vh"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
      margin="auto"
      bgcolor="white"
    >
      {children}
    </Box>
  )
}
