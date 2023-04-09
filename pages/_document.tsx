import { Box } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body>
        <Main />
        <Box display="fixed" bottom={16} left={16}>
          Hello World
        </Box>
        <NextScript />
      </body>
    </Html>
  )
}
