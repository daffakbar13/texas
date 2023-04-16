import { Box, Divider, Skeleton } from '@mui/material'
import * as React from 'react'
import { useIsFetching } from '@texas/utils/hooks'
import { ProductWrapper } from '../ProductList/ProductWrapper'

export default function VariantLoader() {
  const isFetching = useIsFetching('productCategory', 'productItems', 'cart')

  return (
    <>
      {isFetching && (
        <>
          <Box>
            <Divider />
            <ProductWrapper>
              <Skeleton variant="rounded" width={96} height={96} />
              <Box display="flex" flexDirection="column" flexGrow={1} gap={1}>
                <Skeleton variant="text" width="60%" sx={{ fontSize: 14 }} />
                <Skeleton variant="text" width="80%" sx={{ fontSize: 13 }} />
                <Skeleton variant="text" width="40%" sx={{ fontSize: 13 }} />
                <Box display="flex" justifyContent="end">
                  <Skeleton variant="circular" width={24} height={24} />
                </Box>
              </Box>
            </ProductWrapper>
          </Box>
          <Box display="flex" flexDirection="column" gap={2} maxHeight="100%" overflow="scroll">
            <Box display="flex" flexDirection="column">
              <Skeleton variant="text" width="60%" sx={{ fontSize: 14 }} />
              <Box display="flex" gap={2}>
                <Skeleton variant="text" width="40%" sx={{ fontSize: 13 }} />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              {[1, 1, 1, 1, 1].map((_, i) => (
                <Box key={i} display="flex" gap={1}>
                  <Box
                    flexGrow={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                  >
                    <Skeleton
                      variant="text"
                      width={i % 2 === 0 ? '30%' : '40%'}
                      sx={{ fontSize: 14 }}
                    />
                    <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />
                  </Box>
                  <Box>
                    <Skeleton variant="rounded" width={20} height={20} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Skeleton variant="rounded" width="100%" height={36.5} />
          {/* <TexasButton size="medium" onClick={closeDrawerVariant}>
            Add To Cart
          </TexasButton> */}
        </>
      )}
    </>
  )
}
