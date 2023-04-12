import { create } from 'zustand'
import { ProductStates } from './types/states'
import { ProductActions } from './types/actions'

const useProductStore = create<ProductActions & ProductStates>()((set, get) => ({
  activeTab: 1,
  allProductOffsetTop: [0],
  searchKeyword: '',
  showDrawerVariant: false,
  selectedProductId: '',
  temporarySelectedVariantItems: [],
  temporarySelectedQty: 1,
  isCategoryDrawerOpen: false,
  isProductPreviewDrawerOpen: false,
  isShowFloatingCartButton: false,
  changeSearchKeyword: (value, router) => {
    const { changeViewMode, refetchAllProductData } = get()
    const isNullValue = value.length === 0
    set(() => ({ searchKeyword: value, activeTab: 1 }))
    changeViewMode(isNullValue ? 'list' : 'search', router)
    if (value.length >= 3) {
      refetchAllProductData()
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
    const { productScrollTo, getCategoriesOffsetTop } = get()
    productScrollTo(getCategoriesOffsetTop()[i])
  },
  onScrollProductList: (e) => {
    const { tabScrollTo, getCategoriesOffsetTop, hideCartFloatingButton } = get()
    const { scrollTop } = e.target as any

    hideCartFloatingButton()

    set(({ activeTab }) => {
      const lastIndex = getCategoriesOffsetTop().findLastIndex((o) => scrollTop >= o - 128)
      const newActiveTab = lastIndex + 1

      if (activeTab !== newActiveTab) {
        tabScrollTo(lastIndex)
      }
      return { activeTab: newActiveTab }
    })
  },
  productScrollTo: (top) => {
    const { getProductListWrapperDocument } = get()
    const productListWrapper = getProductListWrapperDocument()
    productListWrapper?.scrollTo({ top, behavior: 'smooth' })
  },
  getCategoriesOffsetTop() {
    const { productCategory, getProductCategoryDocument, getProductListWrapperDocument } = get()
    if (productCategory?.data) {
      const productListWrapper = getProductListWrapperDocument()
      return productCategory.data.categories.map((_, i) => {
        const doc = getProductCategoryDocument(i)
        return (doc?.offsetTop || 0) - (productListWrapper?.offsetTop || 0)
      })
    }
    return [0]
  },
  tabScrollTo: (i) => {
    const { getProductTabScrollableWrapperDocument, getProductTabDocument } = get()
    const wrapper = getProductTabScrollableWrapperDocument()
    const currentTab = getProductTabDocument(i)
    const offsetLeft = (currentTab?.offsetLeft || 0) - (wrapper?.offsetLeft || 0)

    wrapper?.scrollTo({ left: offsetLeft - 32, behavior: 'smooth' })
  },
  openDrawerVariant: (selectedProductId) => {
    const { refetchAllProductData } = get()
    refetchAllProductData()
    set({ selectedProductId, showDrawerVariant: 'list' })
  },
  closeDrawerVariant: () => {
    set({ showDrawerVariant: false, temporarySelectedVariantItems: [], temporarySelectedQty: 1 })
    setTimeout(() => {
      set(() => ({ selectedProductId: '' }))
    }, 300)
  },
  generateSelectionText: (s, language) => {
    const { setVariantMin, setVariantMax, variantCategoryMin, variantCategoryMax, variants } = s

    const variantLength = variants.length
    const isHaveMinAndMax = setVariantMin && setVariantMax
    const isEqMinMax = variantCategoryMin === variantCategoryMax
    const isEqMinVarLength = variantCategoryMin === variantLength
    const isEN = language === 'en'
    const upTo = isEN ? 'up to' : 'sampai'

    const generateText = (...v: (string | number)[]) => [isEN ? 'Select' : 'Pilih', ...v].join(' ')

    if (isHaveMinAndMax) {
      if (isEqMinMax || isEqMinVarLength) {
        return generateText(variantCategoryMin)
      }
      return generateText(variantCategoryMin, upTo, variantCategoryMax)
    }
    if (setVariantMin) {
      if (isEqMinVarLength) {
        return generateText(variantLength)
      }
      return generateText(variantCategoryMin, upTo, variantLength)
    }
    if (setVariantMax) {
      return generateText(upTo, variantCategoryMax)
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
    const [view_mode] = window.location.pathname.split('/').reverse()
    const isOnSearch = view_mode === 'search'
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
  getVariantByProductId() {
    const { productItems, getProductById } = get()
    const selectedProduct = getProductById()

    if (productItems?.data && selectedProduct) {
      return selectedProduct.variantCategoryData
    }
    return []
  },
  getProductById() {
    const { productItems, selectedProductId } = get()
    return productItems?.data?.products.find((e) => e.productId === selectedProductId)
  },
  refetchAllProductData() {
    const { productItems, productCategory, cart } = get()
    productItems?.refetch()
    productCategory?.refetch()
    cart?.refetch()
  },
  handleAddVariantItem(variantCategoryId, variantItemId) {
    const { temporarySelectedVariantItems, getVariantByProductId } = get()
    const isChecked = temporarySelectedVariantItems.includes(variantItemId)
    const selectedIndex = temporarySelectedVariantItems.findIndex((e) => e === variantItemId)
    const newSelected = [...temporarySelectedVariantItems]
    if (isChecked) {
      newSelected.splice(selectedIndex, 1)
    } else {
      const variantList = getVariantByProductId()
      const variantCategory = variantList.find((e) => e.variantCategoryId === variantCategoryId)
      if (variantCategory) {
        const { setVariantMax, variantCategoryMax, variants } = variantCategory
        // const minChoice = setVariantMin ? variantCategoryMin : 0
        const maxChoice = setVariantMax ? variantCategoryMax : variants.length
        const variantIds = variants.map((e) => e.itemVariantId)
        const selectedVariant = temporarySelectedVariantItems.filter((e) => variantIds.includes(e))
        const selectedLength = selectedVariant.length
        if (selectedLength <= maxChoice) {
          newSelected.push(variantItemId)
        }
      }
    }

    set({ temporarySelectedVariantItems: newSelected })
  },
  isCheckedVariant(variantItemId) {
    const { temporarySelectedVariantItems } = get()
    return temporarySelectedVariantItems.includes(variantItemId)
  },
  getItemSubTotal() {
    const {
      temporarySelectedVariantItems,
      getProductById,
      getVariantByProductId,
      temporarySelectedQty,
    } = get()
    const product = getProductById()
    const priceList = [0]
    if (product) {
      priceList.push(product.productPriceNett)
      getVariantByProductId().forEach((e) => {
        e.variants.forEach((v) => {
          if (temporarySelectedVariantItems.includes(v.itemVariantId)) {
            priceList.push(v.itemVariantPrice)
          }
        })
      })
    }
    return priceList.reduce((a, b) => a + b) * temporarySelectedQty
  },
  handleAddItemQty() {
    set(({ temporarySelectedQty }) => ({ temporarySelectedQty: temporarySelectedQty + 1 }))
  },
  handleReduceItemQty() {
    const { temporarySelectedQty } = get()
    if (temporarySelectedQty > 1) {
      set({ temporarySelectedQty: temporarySelectedQty - 1 })
    }
  },
  isActiveTab(index) {
    const { activeTab } = get()
    return activeTab === index + 1
  },
  openCategoryDrawer() {
    set({ isCategoryDrawerOpen: true })
  },
  closeCategoryDrawer() {
    set({ isCategoryDrawerOpen: false })
  },
  openProductPreviewDrawer(selectedProductId) {
    set({ isProductPreviewDrawerOpen: true, selectedProductId })
  },
  closeProductPreviewDrawer() {
    set({ isProductPreviewDrawerOpen: false })
  },
  showCartFloatingButton() {
    set({ isShowFloatingCartButton: true })
  },
  hideCartFloatingButton() {
    set({ isShowFloatingCartButton: false })
  },
}))

export default useProductStore
