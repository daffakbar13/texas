import { create } from 'zustand'
import { SERVING_DUMMY } from '@texas/views/product/constants'
import { ProductStates } from './types/states'
import { ProductActions } from './types/actions'

const useProductStore = create<ProductActions & ProductStates>()((set, get) => ({
  activeTab: 1,
  allProductOffsetTop: [0],
  searchKeyword: '',
  productList: SERVING_DUMMY,
  productListFiltered: [],
  filterServing: (value) => {
    if (value.length < 3) {
      set(() => ({ productListFiltered: [] }))
    } else {
      set(({ productList }) => {
        const filtered: typeof SERVING_DUMMY = productList.map((e) => {
          const filteredServingItems = e.servingItems.filter((s) => {
            const valueLowerCase = value.toLowerCase()
            return [
              s.servingName.toLowerCase().includes(valueLowerCase),
              s.servingDescription.toLowerCase().includes(valueLowerCase),
              s.servingNett.toString().includes(valueLowerCase),
            ].includes(true)
          })

          return { servingCategoryName: e.servingCategoryName, servingItems: filteredServingItems }
        })

        return { productListFiltered: filtered }
      })
    }
  },
  changeSearchKeyword: (value, router) => {
    const { changeViewMode, filterServing } = get()
    const isNullValue = value.length === 0
    set(() => ({ searchKeyword: value }))
    filterServing(value)
    changeViewMode(isNullValue ? 'list' : 'search', router)
  },
  changeViewMode: (view_mode, router) => {
    if (router.query.view_mode !== view_mode) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, view_mode },
      })
    }
  },
  getProductCategoryDocument: (i) => document.getElementById(`product-category-${i + 1}`),
  onClickTabProductList: (i) => {
    const { productScrollTo } = get()
    set(({ allProductOffsetTop }) => {
      productScrollTo(allProductOffsetTop[i])
      return { activeTab: i + 1 }
    })
  },
  onScrollProductList: (e) => {
    const { scrollTop } = e.target as any
    set(({ allProductOffsetTop }) => {
      const activeTab = allProductOffsetTop.findLastIndex((o) => scrollTop >= o - 64) + 1
      return { activeTab }
    })
  },
  productScrollTo: (top) => {
    const productListWrapper = document.getElementById('product-list-wrapper')
    productListWrapper?.scrollTo({ top, behavior: 'smooth' })
  },
  productScrollListener: () => {
    const { getProductCategoryDocument } = get()
    set(({ productList }) => {
      const productListWrapper = document.getElementById('product-list-wrapper')
      const allProductOffsetTop = productList.map((_, i) => {
        const productCategory = getProductCategoryDocument(i)
        return (productCategory?.offsetTop || 0) - (productListWrapper?.offsetTop || 0)
      })
      return { allProductOffsetTop }
    })
  },
}))

export default useProductStore
