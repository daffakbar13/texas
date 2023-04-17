import { UseQueryOptions } from '@tanstack/react-query'
import { Cart } from '@texas/services/panther/types'
import { ProductCategoryList, ProductItemList } from '@texas/services/ruby/types'

export type QueryKeyStates = {
  productCategory: UseQueryOptions<ProductCategoryList> & { queryKey: string[] }
  productItems: UseQueryOptions<ProductItemList> & { queryKey: string[] }
  cart: UseQueryOptions<Cart> & { queryKey: string[] }
}
