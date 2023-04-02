import { Box, Typography } from '@mui/material'
import React from 'react'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import Image from 'next/image'
import { TexasButton } from '@texas/components'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
import { ProductListContainer } from './ProductListContainer'
import { ProductTabWrapper } from './ProductTabWrapper'
import { ProductListWrapper } from './ProductListWrapper'
import { ProductCategoryWrapper } from './ProductCategoryWrapper'
import { ProductCategoryText } from './ProductCategoryText'
import { ProductWrapper } from './ProductWrapper'
import { ProductNameText } from './ProductNameText'
import { ProductDescriptionText } from './ProductDescriptionText'
import { ProductPriceText } from './ProductPriceText'
import { ProductNettText } from './ProductNettText'
import { PromoLabel } from './PromoLabel'

export default function SectionProductList() {
  const {
    activeTab,
    productList,
    productListFiltered,
    onClickTabProductList,
    onScrollProductList,
    productScrollListener,
  } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'
  const hideOnSearch = { ...(isOnSearch && { display: 'none' }) }

  React.useEffect(() => {
    productScrollListener()
  }, [productList])

  return (
    <ProductListContainer>
      <ProductTabWrapper sx={hideOnSearch}>
        <TexasButton variant="outlined" sx={{ padding: 0.5, minWidth: 0 }}>
          <ListRoundedIcon />
        </TexasButton>
        <Box display="flex" gap={1} width="100%" overflow="scroll">
          {productList.map((e, i) => (
            <TexasButton
              key={i}
              variant={activeTab === i + 1 ? 'contained' : 'outlined'}
              onClick={() => onClickTabProductList(i)}
              sx={{ transitionDuration: '300ms' }}
            >
              {e.servingCategoryName}
            </TexasButton>
          ))}
        </Box>
      </ProductTabWrapper>
      <ProductListWrapper id="product-list-wrapper" onScroll={onScrollProductList}>
        {(isOnSearch ? productListFiltered : productList).map((e, i) => (
          <React.Fragment key={i}>
            <ProductCategoryWrapper id={`product-category-${i + 1}`} sx={hideOnSearch}>
              <ProductCategoryText>{e.servingCategoryName}</ProductCategoryText>
            </ProductCategoryWrapper>
            {e.servingItems.map((s, idx) => (
              <ProductWrapper key={idx}>
                <Image
                  src={s.servingImage}
                  alt="Product Image"
                  height={96}
                  width={96}
                  style={{ borderRadius: 8 }}
                />
                <Box display="flex" flexDirection="column" gap={1}>
                  <ProductNameText>{s.servingName}</ProductNameText>
                  <ProductDescriptionText>{s.servingDescription}</ProductDescriptionText>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <ProductPriceText>{s.servingPrice.toLocaleString()}</ProductPriceText>
                    <ProductNettText>{s.servingNett.toLocaleString()}</ProductNettText>
                    <PromoLabel />
                  </Box>
                  <Box display="flex" justifyContent="end">
                    <Box display="flex" alignItems="center" gap={1} color="primary.main">
                      <RemoveCircleOutlineRoundedIcon />
                      <Typography sx={{ fontSize: 14, fontWeight: 'bold', lineHeight: '16px' }}>
                        1
                      </Typography>
                      <AddCircleOutlineRoundedIcon />
                    </Box>
                  </Box>
                </Box>
              </ProductWrapper>
            ))}
          </React.Fragment>
        ))}
      </ProductListWrapper>
    </ProductListContainer>
  )
}
