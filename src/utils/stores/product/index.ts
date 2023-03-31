import { create } from 'zustand'
import { ProductStates } from './types/states'
import { ProductActions } from './types/actions'

const useProductStore = create<ProductActions & ProductStates>()((set, get) => ({
  searchKeyword: '',
  changeSearchKeyword: (value, router) => {
    const { changeViewMode } = get()
    const isNullValue = value.length === 0
    set(() => ({ searchKeyword: value }))
    changeViewMode(isNullValue ? 'list' : 'search', router)
  },
  changeViewMode: (viewMode, router) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, view_mode: viewMode },
    })
  },
}))

export default useProductStore
