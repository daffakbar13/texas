import { useQueries } from '@tanstack/react-query'
import useQueryKeyStore from '@texas/utils/stores/queryKey'
import React from 'react'

export default function Queries() {
  const q = useQueryKeyStore()
  useQueries({ queries: [q.productCategory, q.productItems, q.cart] })

  return <></>
}
