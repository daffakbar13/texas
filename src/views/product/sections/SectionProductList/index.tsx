import React from 'react'
import { ProductListContainer } from './ProductListContainer'
import ProductList from './ProductList'
import ProductTab from './ProductTab'

export default function SectionProductList() {
  return (
    <ProductListContainer>
      <ProductTab />
      <ProductList />
      {/* <CartDrawer /> */}
    </ProductListContainer>
  )
}
