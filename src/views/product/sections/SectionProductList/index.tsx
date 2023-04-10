import React from 'react'
import { Divider } from '@mui/material'
import { ProductListContainer } from './ProductListContainer'
import ProductList from './ProductList'
import ProductTab from './ProductTab'
import VariantDrawer from './VariantDrawer'
import CategoryDrawer from './CategoryDrawer'
import ProductPreviewDrawer from './ProductPreviewDrawer'

export default function SectionProductList() {
  return (
    <ProductListContainer>
      <ProductTab />
      <Divider />
      <ProductList />
      <VariantDrawer />
      <CategoryDrawer />
      <ProductPreviewDrawer />
    </ProductListContainer>
  )
}
