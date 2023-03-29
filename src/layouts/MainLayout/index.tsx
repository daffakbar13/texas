import { Box } from '@mui/material'
import { ICPosliveLogoText } from '@texas/assets'
import Image from 'next/image'
import React from 'react'

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        // borderBottom="1px solid #d9d9d9"
      >
        <Image src={ICPosliveLogoText.src} alt="Poslive Logo" width={96} height={48} />
        EN
      </Box>
      {children}
    </>
  )
}
