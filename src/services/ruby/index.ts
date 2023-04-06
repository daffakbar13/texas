import { texasFtRuby } from '..'
import { ProductCategoryList } from './types'

export const getProductCategoryList = (merchant_id: string): ProductCategoryList =>
  texasFtRuby({
    url: '/v1/pwa/product/category/list',
    method: 'GET',
    params: { merchant_id },
  }) as unknown as ProductCategoryList

export const getProductItemList = (merchant_id: string): any =>
  texasFtRuby({
    url: '/v1/pwa/product/item/list',
    method: 'GET',
    params: { merchant_id },
  }) as unknown as any
