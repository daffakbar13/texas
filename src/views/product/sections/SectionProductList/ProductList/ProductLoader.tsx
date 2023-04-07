import { Box, Skeleton } from '@mui/material'
import React from 'react'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
import { ProductCategoryWrapper } from './ProductCategoryWrapper'
import { ProductWrapper } from './ProductWrapper'

export default function ProductLoader() {
  const { isTriggerLoading } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'

  return (
    <>
      {isTriggerLoading() && (
        <>
          {!isOnSearch && (
            <ProductCategoryWrapper>
              <Skeleton variant="text" width="60%" sx={{ fontSize: 16 }} />
            </ProductCategoryWrapper>
          )}
          {[1, 1, 1, 1, 1].map((_, i) => (
            <React.Fragment key={i}>
              <ProductWrapper>
                <Skeleton variant="rounded" width={96} height={96} />
                <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                  <Skeleton variant="text" width="60%" sx={{ fontSize: 14 }} />
                  <Skeleton variant="text" width="80%" sx={{ fontSize: 13 }} />
                  <Skeleton variant="text" width="40%" sx={{ fontSize: 13 }} />
                  <Box display="flex" justifyContent="end">
                    <Skeleton variant="circular" width={24} height={24} />
                  </Box>
                </Box>
              </ProductWrapper>
            </React.Fragment>
          ))}
        </>
      )}
    </>
  )
}
