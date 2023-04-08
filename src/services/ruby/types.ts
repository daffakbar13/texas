interface Categories {
  readonly categoryId: string
  readonly categoryName: string
  readonly categoryOrder: number
}

export interface ProductCategoryList {
  readonly merchantId: string
  readonly categories: Categories[]
}

interface Variant {
  readonly itemVariantCategoryId: string
  readonly itemVariantId: string
  readonly itemVariantName: string
  readonly itemVariantPrice: number
}

export interface VariantCategory {
  readonly variantCategoryId: string
  readonly variantCategoryName: string
  readonly variantCategoryMin: number
  readonly variantCategoryMax: number
  readonly setVariantMin: boolean
  readonly setVariantMax: boolean
  readonly itemVariantCategoryOrder: number
  readonly variants: Variant[]
}

export interface Products {
  readonly productCategoryId: string
  readonly productCategoryName: string
  readonly productId: string
  readonly productName: string
  readonly productPrice: number
  readonly productPriceNett: number
  readonly isProductPriceDiscount: boolean
  readonly productImage: string
  readonly productDescription: string
  readonly productStock: number
  readonly productStockAvailable: string
  readonly productOrder: number
  readonly isProductVariant: boolean
  readonly variantCategoryIds: string[]
  readonly variantCategoryData: VariantCategory[]
}

export interface ProductItemList {
  readonly merchantId: string
  readonly products: Products[]
}
