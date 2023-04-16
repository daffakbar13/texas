import { Stack } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import useProductStore from '@texas/utils/stores/product'
import { useIsFetching } from '@texas/utils/hooks'
import { SectionCart, SectionProductList, SectionPromoBanner, SectionSearch } from './sections'

export default function Product() {
  const { changeSearchKeyword, onScrollProductList } = useProductStore()
  const router = useRouter()
  const isFetching = useIsFetching('productCategory', 'productItems', 'cart')

  React.useEffect(() => {
    router.beforePopState(() => {
      changeSearchKeyword('', router)

      return true
    })
  })

  return (
    <Stack
      id="product-list-wrapper"
      direction="column"
      overflow="auto"
      position="relative"
      {...(!isFetching && { onScroll: onScrollProductList })}
    >
      <SectionSearch />
      <SectionPromoBanner />
      <SectionProductList />
      <SectionCart />
    </Stack>
  )
}
