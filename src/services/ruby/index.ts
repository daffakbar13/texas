import { ProductCategoryList, ProductItemList } from './types'
import { createService } from '..'

const ruby = createService(process.env.NEXT_PUBLIC_RUBY_URL)

export const getProductCategoryList = (merchantId: string) =>
  ruby.get<null, ProductCategoryList>('pwa/product/category/list', {
    params: { merchantId },
  })

export const getProductItemList = (merchantId: string) =>
  ruby.get<null, ProductItemList>('pwa/product/item/list', {
    params: { merchantId },
  })
