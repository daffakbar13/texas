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
      {[
        ILDummyPromoBanner1.src,
        ILDummyPromoBanner2.src,
        ILDummyPromoBanner3.src,
        ILDummyPromoBanner4.src,
        ILDummyPromoBanner5.src,
      ].map((e, i) => (
        <Box
          key={i}
          width="100%"
          height={carouselHeight}
          position="relative"
          {...(isOnSearch && { display: 'none' })}
        >
          <Image src={e} alt="Promo Banner" fill objectFit="cover" style={{ borderRadius: 8 }} />
        </Box>
      ))}
    </Carousel>
  )
}
