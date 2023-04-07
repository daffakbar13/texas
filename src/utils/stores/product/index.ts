import { create } from 'zustand'
import { ProductStates } from './types/states'
import { ProductActions } from './types/actions'

const useProductStore = create<ProductActions & ProductStates>()((set, get) => ({
  activeTab: 1,
  allProductOffsetTop: [0],
  searchKeyword: '',
  showDrawerVariant: false,
  selectedServingCategory: 0,
  selectedServingItem: 0,
  changeSearchKeyword: (value, router) => {
    const { productCategory, productItems, changeViewMode } = get()
    const isNullValue = value.length === 0
    set(() => ({ searchKeyword: value }))
    changeViewMode(isNullValue ? 'list' : 'search', router)
    if (productCategory && productItems) {
      if (value.length >= 3) {
        productCategory.refetch()
        productItems.refetch()
      }
    }
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
  openDrawerVariant: () => {},
  closeDrawerVariant: () => set(() => ({ showDrawerVariant: false })),
  generateSelectionText: (s, language) => {
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
    const isEN = language === 'en'
    const upTo = isEN ? 'up to' : 'sampai'

    const generateText = (...v: (string | number)[]) => [isEN ? 'Select' : 'Pilih', ...v].join(' ')

    if (isHaveMinAndMax) {
      if (isEqMinMax || isEqMinVarLength) {
        return generateText(minimumChoice)
      }
      return generateText(minimumChoice, upTo, maximumChoice)
    }
    if (isHaveMinimumChoice) {
      if (isEqMinVarLength) {
        return generateText(variantLength)
      }
      return generateText(minimumChoice, upTo, variantLength)
    }
    if (isHaveMaximumChoice) {
      return generateText(upTo, maximumChoice)
    }

    return generateText(upTo, variantLength)
  },
  handleCategoryData(productCategory) {
    set(() => ({ productCategory }))
  },
  handleProductData(productItems) {
    set(() => ({ productItems }))
  },
  handleCartData(cart) {
    set(() => ({ cart }))
  },
  getProductItemByCategory(categoryId) {
    const { productItems, searchKeyword, getProductByCategoryAndSearch } = get()
    const isOnSearch = searchKeyword.length > 0
    const is3CharSearch = searchKeyword.length >= 3
    if (productItems?.data) {
      const { products } = productItems.data
      const filterByCategory = products.filter((e) => e.productCategoryId === categoryId)
      const filterWithSearch = getProductByCategoryAndSearch(filterByCategory)
      if (isOnSearch) {
        if (is3CharSearch) {
          return filterWithSearch
        }
        return []
      }
      return filterByCategory
    }
    return []
  },
  getProductByCategoryAndSearch: (products) => {
    const { searchKeyword } = get()
    if (searchKeyword.length < 3) {
      return []
    }
    const filteredServingItems = products.filter((s) => {
      const valueLowerCase = searchKeyword.toLowerCase()
      return [
        s.productName.toLowerCase().includes(valueLowerCase),
        s.productDescription.toLowerCase().includes(valueLowerCase),
        s.productPriceNett.toString().includes(valueLowerCase),
      ].includes(true)
    })
    return filteredServingItems
  },
  isTriggerLoading() {
    const { productCategory, productItems } = get()
    const isCategoryLoading = productCategory?.isLoading || productCategory?.isFetching
    const isProductLoading = productItems?.isLoading || productItems?.isFetching
    return Boolean(isCategoryLoading || isProductLoading)
  },
}))

export default useProductStore
