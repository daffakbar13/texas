import { Box } from '@mui/material'
import React from 'react'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import { TexasButton } from '@texas/components'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
import { ProductTabWrapper } from './ProductTabWrapper'
import ProductTabLoader from './ProductTabLoader'

export default function ProductTab() {
  const { activeTab, productCategory, onClickTabProductList, isTriggerLoading } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'

  return (
    <>
      {!isOnSearch && (
        <ProductTabWrapper>
          <Box>
            <TexasButton variant="outlined" sx={{ padding: 0.5, minWidth: 0 }}>
              <ListRoundedIcon />
            </TexasButton>
          </Box>
          <Box display="flex" id="product-tab-scrollable-wrapper" overflow="scroll" gap={1}>
            <ProductTabLoader />
            {!isTriggerLoading() && (
              <>
                {productCategory?.data?.categories.map((e, i) => (
                  <Box key={i} display="flex" alignItems="center">
                    <TexasButton
                      key={i}
                      id={`product-tab-${i + 1}`}
                      variant={activeTab === i + 1 ? 'contained' : 'outlined'}
                      onClick={() => onClickTabProductList(i)}
                      sx={{ transitionDuration: '300ms', width: 'max-content' }}
                    >
                      {e.categoryName}
                    </TexasButton>
                  </Box>
                ))}
              </>
            )}
          </Box>
        </ProductTabWrapper>
      )}
    </>
  )
}
