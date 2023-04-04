import { SERVING_DUMMY } from '@texas/views/product/constants'

type SwiperVariantType = 'list' | 'summary' | false

export type ProductStates = {
  searchKeyword: string
  activeTab: number
  allProductOffsetTop: number[]
  productList: typeof SERVING_DUMMY
  productListFiltered: typeof SERVING_DUMMY
  showDrawerVariant: SwiperVariantType
  selectedServingCategory: number
  selectedServingItem: number
}
