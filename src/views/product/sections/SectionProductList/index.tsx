import React from 'react'
import { ProductListContainer } from './ProductListContainer'
import ProductList from './ProductList'
import ProductTab from './ProductTab'
import VariantDrawer from './VariantDrawer'

export default function SectionProductList() {
  return (
    <ProductListContainer>
      <ProductTab />
      <ProductList />
      <VariantDrawer />
    </ProductListContainer>
  )
}
