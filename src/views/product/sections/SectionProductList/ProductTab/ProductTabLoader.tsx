import { Box, Skeleton } from '@mui/material'
import React from 'react'
import useProductStore from '@texas/utils/stores/product'

export default function ProductTabLoader() {
  const { productCategory, productItems } = useProductStore()

  return (
    <>
      {(productCategory?.isLoading || productItems?.isLoading) && (
        <>
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <Box key={i}>
              <Skeleton variant="rounded" width={64} height={31} />
            </Box>
          ))}
        </>
      )}
    </>
  )
}
