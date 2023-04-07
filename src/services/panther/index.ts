import { createService } from '..'
import { AddCartPayload, Cart } from './types'

const panther = createService(process.env.NEXT_PUBLIC_PANTHER_URL)

export const addCart = (payload: AddCartPayload) => panther.post('order/cart', payload)

export const getCart = (userId: string, merchantId: string) =>
  panther.get<null, Cart>('order/cart', {
    params: { userId, merchantId },
  })
