import { UseQueryOptions } from '@tanstack/react-query'
import { Cart } from '@texas/services/panther/types'
import { ProductCategoryList, ProductItemList } from '@texas/services/ruby/types'

export type QueryKeyStates = {
  productCategory: UseQueryOptions<ProductCategoryList, unknown, ProductCategoryList, string[]>
  productItems: UseQueryOptions<ProductItemList, unknown, ProductItemList, string[]>
  cart: UseQueryOptions<Cart, unknown, Cart, string[]>
}
