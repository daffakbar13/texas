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
  showDrawerVariant: false,
  selectedServingCategory: 0,
  selectedServingItem: 0,
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
      router.push({ query: { ...router.query, view_mode } })
    }
  },
  getProductCategoryDocument: (i) => document.getElementById(`product-category-${i + 1}`),
  getProductTabDocument: (i) => document.getElementById(`product-tab-${i + 1}`),
  getProductListWrapperDocument: () => document.getElementById('product-list-wrapper'),
  getProductTabScrollableWrapperDocument: () =>
    document.getElementById('product-tab-scrollable-wrapper'),
  onClickTabProductList: (i) => {
    const { productScrollTo } = get()
    set(({ allProductOffsetTop }) => {
      productScrollTo(allProductOffsetTop[i])
      return {}
    })
  },
  onScrollProductList: (e) => {
    const { tabScrollTo } = get()
    const { scrollTop } = e.target as any
    set(({ activeTab, allProductOffsetTop }) => {
      const newActiveTab = allProductOffsetTop.findLastIndex((o) => scrollTop >= o - 128) + 1
      if (activeTab !== newActiveTab) {
        tabScrollTo(newActiveTab - 1)
      }
      return { activeTab: newActiveTab }
    })
  },
  productScrollTo: (top) => {
    const { getProductListWrapperDocument } = get()
    const productListWrapper = getProductListWrapperDocument()
    productListWrapper?.scrollTo({ top, behavior: 'smooth' })
  },
  productScrollListener: (categories: any[]) => {
    const { getProductCategoryDocument, getProductListWrapperDocument } = get()
    set(() => {
      const productListWrapper = getProductListWrapperDocument()
      const allProductOffsetTop = categories.map((_, i) => {
        const productCategory = getProductCategoryDocument(i)
        return (productCategory?.offsetTop || 0) - (productListWrapper?.offsetTop || 0)
      })
      return { allProductOffsetTop }
    })
  },
  tabScrollTo: (i) => {
    const { getProductTabScrollableWrapperDocument, getProductTabDocument } = get()
    const wrapper = getProductTabScrollableWrapperDocument()
    const currentTab = getProductTabDocument(i)
    const offsetLeft = (currentTab?.offsetLeft || 0) - (wrapper?.offsetLeft || 0)

    wrapper?.scrollTo({ left: offsetLeft - 32, behavior: 'smooth' })
  },
  openDrawerVariant: (c, i) =>
    set(({ productList }) => {
      const isHaveCart = productList[c].servingItems[i].cartSummary.length > 0
      return {
        selectedServingCategory: c,
        selectedServingItem: i,
        showDrawerVariant: isHaveCart ? 'summary' : 'list',
      }
    }),
  closeDrawerVariant: () => set(() => ({ showDrawerVariant: false })),
  generateSelectionText: (s) => {
    const {
      isHaveMaximumChoice,
      isHaveMinimumChoice,
      maximumChoice,
      minimumChoice,
      // variantGroupName,
      variantItems,
    } = s

    const variantLength = variantItems.length
    const isHaveMinAndMax = isHaveMinimumChoice && isHaveMaximumChoice
    const isEqMinMax = minimumChoice === maximumChoice
    const isEqMinVarLength = minimumChoice === variantLength

    const generateText = (...v: (string | number)[]) => ['Select', ...v].join(' ')

    if (isHaveMinAndMax) {
      if (isEqMinMax || isEqMinVarLength) {
        return generateText(minimumChoice)
      }
      return generateText(minimumChoice, 'up to', maximumChoice)
    }
    if (isHaveMinimumChoice) {
      if (isEqMinVarLength) {
        return generateText(variantLength)
      }
      return generateText(minimumChoice, 'up to', variantLength)
    }
    if (isHaveMaximumChoice) {
      return generateText('up to', maximumChoice)
    }

    return generateText('up to', variantLength)
  },
}))

export default useProductStore
