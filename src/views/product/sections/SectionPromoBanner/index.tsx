/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@mui/material'
import { ILDummyPromoBanner } from '@texas/assets'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'
import { useMainStore } from '@texas/utils/stores'

export default function SectionPromoBanner() {
  const { contentWidth } = useMainStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'
  const carouselWidth = contentWidth - 32

  return (
    <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay>
      <Box
        width="100%"
        height={carouselWidth / 4}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselWidth / 4}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselWidth / 4}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselWidth / 4}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselWidth / 4}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
    </Carousel>
  )
}
