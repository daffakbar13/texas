import { Box } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import useProductStore from '@texas/utils/stores/product'
import { SectionProductList, SectionPromoBanner, SectionSearch } from './sections'

export default function Product() {
  const { changeSearchKeyword } = useProductStore()
  const router = useRouter()
  // const isOnSearch = router.query.view_mode === 'search'

  React.useEffect(() => {
    router.beforePopState(() => {
      changeSearchKeyword('', router)
      return true
    })
  })

  return (
    <>
      <SectionSearch />
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        overflow="hidden"
        sx={{
          // height: isOnSearch ? 0 : '100%',
          //  transitionDuration: '300ms'
          height: '100%',
        }}
      >
        <SectionPromoBanner />
        <SectionProductList />
      </Box>
    </>
  )
}
