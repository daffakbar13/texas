import { SERVING_DUMMY } from '@texas/views/product/constants'

export type ProductStates = {
  searchKeyword: string
  activeTab: number
  allProductOffsetTop: number[]
  productList: typeof SERVING_DUMMY
  productListFiltered: typeof SERVING_DUMMY
}
