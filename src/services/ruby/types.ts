interface ProductCategoryItems {
  categoryId: string
  categoryName: string
  categoryOrder: number
}

export interface ProductCategoryList {
  categories: ProductCategoryItems[]
  merchantId: string
}
