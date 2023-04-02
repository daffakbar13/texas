/* eslint-disable no-unused-vars */
import { NextRouter } from 'next/router'

type TogleEvent = React.KeyboardEvent | React.MouseEvent

export type ProductActions = {
  changeSearchKeyword(value: string, router: NextRouter): void
  changeViewMode(viewMode: 'list' | 'search', router: NextRouter): void
  filterServing(value: string): void
  productScrollListener(): void
  productScrollTo(value: number): void
  onClickTabProductList(index: number): void
  onScrollProductList(e: React.UIEvent<HTMLDivElement, UIEvent>): void
  getProductCategoryDocument(index: number): ReturnType<typeof document.getElementById>
}
