import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import { TexasButton } from '@texas/components'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
import { ProductTabWrapper } from './ProductTabWrapper'
import ProductTabLoader from './ProductTabLoader'

export default function ProductTab() {
  const {
    productCategory,
    showDrawerVariant,
    isActiveTab,
    onClickTabProductList,
    isTriggerLoading,
    openCategoryDrawer,
  } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'
  const isDrawerVariantOpen = Boolean(showDrawerVariant)

  return (
    <ProductTabWrapper minHeight={isOnSearch ? 0 : 52.65} maxHeight={isOnSearch ? 0 : 52.65}>
      <Stack direction="row" gap={1} alignItems="center" paddingTop={1} paddingBottom={1}>
        <Box>
          <TexasButton
            variant="outlined"
            onClick={openCategoryDrawer}
            sx={{ padding: '4px 12px', minWidth: 0 }}
          >
            <ListRoundedIcon />
          </TexasButton>
        </Box>
        <Stack id="product-tab-scrollable-wrapper" direction="row" overflow="scroll" gap={1}>
          {isTriggerLoading() && !isDrawerVariantOpen && <ProductTabLoader />}
          {(!isTriggerLoading() || isDrawerVariantOpen) && (
            <>
              {productCategory?.data?.categories.map((e, i) => (
                <Box key={i} display="flex" alignItems="center">
                  <TexasButton
                    key={i}
                    id={`product-tab-${i + 1}`}
                    variant={isActiveTab(i) ? 'contained' : 'outlined'}
                    size="medium"
                    onClick={() => onClickTabProductList(i)}
                    sx={{ transitionDuration: '300ms', width: 'max-content' }}
                  >
                    {e.categoryName}
                  </TexasButton>
                </Box>
              ))}
            </>
          )}
        </Stack>
      </Stack>
      <Divider />
    </ProductTabWrapper>
  )
}
