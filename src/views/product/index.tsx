import { Box } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import useProductStore from '@texas/utils/stores/product'
import { useQuery } from '@tanstack/react-query'
import { getCart } from '@texas/services/panther'
import { getProductCategoryList, getProductItemList } from '@texas/services/ruby'
import { SectionCart, SectionProductList, SectionPromoBanner, SectionSearch } from './sections'

export default function Product() {
  // eslint-disable-next-line operator-linebreak
  const { changeSearchKeyword, handleProductData, handleCategoryData, handleCartData } =
    useProductStore()
  const router = useRouter()
  const category = useQuery(['Product Category'], () => getProductCategoryList('123'))
  const product = useQuery(['Product Item'], () => getProductItemList('123'))
  const cart = useQuery(['Cart'], () => getCart('guest', '123456789023'))

  React.useEffect(() => {
    router.beforePopState(() => {
      changeSearchKeyword('', router)
      return true
    })
  })

  React.useEffect(() => {
    handleCategoryData(category)
  }, [category.isFetching])

  React.useEffect(() => {
    handleProductData(product)
  }, [product.isFetching])

  React.useEffect(() => {
    handleCartData(cart)
  }, [cart.isFetching])

  return (
    <>
      <SectionSearch />
      <Box display="flex" flexDirection="column" gap={2} overflow="hidden" sx={{ height: '100%' }}>
        <SectionPromoBanner />
        <SectionProductList />
        <SectionCart />
      </Box>
    </>
  )
}
