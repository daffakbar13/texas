/* eslint-disable no-unused-vars */
import { UseQueryResult } from '@tanstack/react-query'
import { Cart } from '@texas/services/panther/types'
import { ProductCategoryList, ProductItemList } from '@texas/services/ruby/types'
import { VARIANT_GROUP_DUMMY } from '@texas/views/product/constants'
import { NextRouter } from 'next/router'

export type ProductActions = {
  changeSearchKeyword(value: string, router: NextRouter): void
  changeViewMode(viewMode: 'list' | 'search', router: NextRouter): void
  // filterServing(value: string): void
  productScrollListener(categories: any[]): void
  productScrollTo(value: number): void
  tabScrollTo(index: number): void
  onClickTabProductList(index: number): void
  onScrollProductList(e: React.UIEvent<HTMLDivElement, UIEvent>): void
  getProductCategoryDocument(index: number): ReturnType<typeof document.getElementById>
  getProductTabDocument(index: number): ReturnType<typeof document.getElementById>
  getProductListWrapperDocument(): ReturnType<typeof document.getElementById>
  getProductTabScrollableWrapperDocument(): ReturnType<typeof document.getElementById>
  openDrawerVariant(categoryIndex: number, itemIndex: number): void
  closeDrawerVariant(): void
  generateSelectionText(selected: (typeof VARIANT_GROUP_DUMMY)[0], language: string): string
  handleCategoryData(res: UseQueryResult<ProductCategoryList>): void
  handleProductData(res: UseQueryResult<ProductItemList>): void
  handleCartData(res: UseQueryResult<Cart>): void
  getProductItemByCategory(categoryId: string): ProductItemList['products']
  getProductByCategoryAndSearch(products: ProductItemList['products']): ProductItemList['products']
  isTriggerLoading(): boolean
}
