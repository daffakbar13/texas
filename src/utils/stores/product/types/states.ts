import { UseQueryResult } from '@tanstack/react-query'
import { Cart } from '@texas/services/panther/types'
import { ProductCategoryList, ProductItemList } from '@texas/services/ruby/types'

type SwiperVariantType = 'list' | 'summary' | false

export type ProductStates = {
  searchKeyword: string
  activeTab: number
  allProductOffsetTop: number[]
  showDrawerVariant: SwiperVariantType
  selectedProductId: string
  productCategory?: UseQueryResult<ProductCategoryList>
  productItems?: UseQueryResult<ProductItemList>
  cart?: UseQueryResult<Cart>
  temporarySelectedVariantItems: string[]
  temporarySelectedQty: number
  isCategoryDrawerOpen: boolean
  isProductPreviewDrawerOpen: boolean
}
