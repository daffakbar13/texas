import { create } from 'zustand'
import { getProductCategoryList, getProductItemList } from '@texas/services/ruby'
import { getCart } from '@texas/services/panther'
import { QueryKeyActions } from './types/actions'
import { QueryKeyStates } from './types/states'

const useQueryKeyStore = create<QueryKeyActions & QueryKeyStates>()(() => ({
  productCategory: {
    queryKey: ['Product Category'],
    queryFn: () => getProductCategoryList('123'),
    enabled: false,
  },
  productItems: {
    queryKey: ['Product Item'],
    queryFn: () => getProductItemList('123'),
    enabled: false,
  },
  cart: {
    queryKey: ['Cart'],
    queryFn: () => getCart('guest', '123456789023'),
    enabled: false,
  },
}))

export default useQueryKeyStore
