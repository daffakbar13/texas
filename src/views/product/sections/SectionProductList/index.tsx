import React from 'react'
import ProductList from './ProductList'
import ProductTab from './ProductTab'
import VariantDrawer from './VariantDrawer'
import CategoryDrawer from './CategoryDrawer'
import ProductPreviewDrawer from './ProductPreviewDrawer'

export default function SectionProductList() {
  return (
    <>
      <ProductTab />
      <ProductList />
      <VariantDrawer />
      <CategoryDrawer />
      <ProductPreviewDrawer />
    </>
  )
}
