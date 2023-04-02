/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@mui/material'
import {
  ILDummyPromoBanner1,
  ILDummyPromoBanner2,
  ILDummyPromoBanner3,
  ILDummyPromoBanner4,
  ILDummyPromoBanner5,
} from '@texas/assets'
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
  const carouselHeight = carouselWidth / 2.76

  return (
    <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay>
      <Box
        width="100%"
        height={carouselHeight}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner1.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselHeight}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner2.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselHeight}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner3.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselHeight}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner4.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
      <Box
        width="100%"
        height={carouselHeight}
        position="relative"
        {...(isOnSearch && { display: 'none' })}
      >
        <Image
          src={ILDummyPromoBanner5.src}
          alt="Promo Banner"
          fill
          objectFit="cover"
          style={{ borderRadius: 16 }}
        />
      </Box>
    </Carousel>
  )
}
