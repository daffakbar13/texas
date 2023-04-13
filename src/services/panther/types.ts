interface Variants {
  readonly variantId: string
  readonly variantName: string
  readonly variantCategoryId: string
  readonly price: number
}

interface Items {
  readonly itemId: string
  readonly itemName: string
  readonly itemCategoryId: string
  readonly itemQty: number
  readonly itemPrice: number
  readonly isItemAvailable: boolean
  readonly totalVariants: number
  readonly variants: Variants[]
  readonly itemSubTotal: number
}

export interface AddCartPayload {
  readonly userId: string
  readonly merchantId: string
  readonly items: Items[]
  readonly totalOrder: number
}

export interface Cart {
  readonly userId: string
  readonly merchantId: string
  readonly items: Items[]
  readonly totalOrder: number
}
