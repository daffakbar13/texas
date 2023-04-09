/* eslint-disable no-unused-vars */
import { UseQueryResult } from '@tanstack/react-query'
import { Cart } from '@texas/services/panther/types'
import {
  ProductCategoryList,
  ProductItemList,
  Products,
  VariantCategory,
} from '@texas/services/ruby/types'
import { VARIANT_GROUP_DUMMY } from '@texas/views/product/constants'
import { NextRouter } from 'next/router'

export type ProductActions = {
  changeSearchKeyword(value: string, router: NextRouter): void
  changeViewMode(viewMode: 'list' | 'search', router: NextRouter): void
  productScrollListener(categories: any[]): void
  productScrollTo(value: number): void
  tabScrollTo(index: number): void
  onClickTabProductList(index: number): void
  onScrollProductList(e: React.UIEvent<HTMLDivElement, UIEvent>): void
  getProductCategoryDocument(index: number): ReturnType<typeof document.getElementById>
  getProductTabDocument(index: number): ReturnType<typeof document.getElementById>
  getProductListWrapperDocument(): ReturnType<typeof document.getElementById>
  getProductTabScrollableWrapperDocument(): ReturnType<typeof document.getElementById>
  openDrawerVariant(selectedProductId: string): void
  closeDrawerVariant(): void
  generateSelectionText(selected: VariantCategory, language: string): string
  handleCategoryData(res: UseQueryResult<ProductCategoryList>): void
  handleProductData(res: UseQueryResult<ProductItemList>): void
  handleCartData(res: UseQueryResult<Cart>): void
  getProductItemByCategory(categoryId: string): Products[]
  getProductByCategoryAndSearch(products: Products[]): Products[]
  isTriggerLoading(): boolean
  getVariantByProductId(): VariantCategory[]
  getProductById(): Products | undefined
  refetchAllProductData(): void
  handleAddVariantItem(variantCategoryId: string, variantItemId: string): void
  isCheckedVariant(variantItemId: string): boolean
  getItemSubTotal(): number
  handleAddItemQty(): void
  handleReduceItemQty(): void
  isActiveTab(index: number): boolean
}
