import { Box } from '@mui/material'
import { ILDummyPromoBanner } from '@texas/assets'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function SectionPromoBanner() {
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'

  return (
    <Box width="100%" height={144} position="relative" {...(isOnSearch && { display: 'none' })}>
      <Image
        src={ILDummyPromoBanner.src}
        alt="Promo Banner"
        fill
        objectFit="cover"
        style={{ borderRadius: 16 }}
      />
    </Box>
  )
}
