/* eslint-disable no-unused-vars */
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
import { TexasButton } from '@texas/components'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { useTranslation } from 'react-i18next'
import { useIsFetching, useTexasQuery } from '@texas/utils/hooks'
import { ProductListWrapper } from './ProductListWrapper'
import { ProductCategoryWrapper } from './ProductCategoryWrapper'
import { ProductCategoryText } from './ProductCategoryText'
import { ProductWrapper } from './ProductWrapper'
import { ProductNameText } from './ProductNameText'
import { ProductDescriptionText } from './ProductDescriptionText'
import { ProductPriceText } from './ProductPriceText'
import { ProductNettText } from './ProductNettText'
import { PromoLabel } from './PromoLabel'
import ProductLoader from './ProductLoader'
import ProductImage from './ProductImage'
import { ProductContent } from './ProductContent'
import { ProductInfo } from './ProductInfo'
import { ProductCounter } from './ProductCounter'

export default function ProductList() {
  const {
    showDrawerVariant,
    getProductQtyInCart,
    openDrawerVariant,
    getProductItemByCategory,
    openProductPreviewDrawer,
  } = useProductStore()
  const { t } = useTranslation()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'
  const isDrawerVariantOpen = Boolean(showDrawerVariant)
  const isFetching = useIsFetching('productCategory', 'productItems', 'cart')
  const productCategory = useTexasQuery('productCategory')
  const productItems = useTexasQuery('productItems')
  const cart = useTexasQuery('cart')

  return (
    <ProductListWrapper>
      {isFetching && !isDrawerVariantOpen && <ProductLoader />}
      {(!isFetching || isDrawerVariantOpen) && (
        <>
          {productCategory.data?.categories.map((c, i) => (
            <React.Fragment key={i}>
              {!isOnSearch && (
                <>
                  <ProductCategoryWrapper id={`product-category-${i + 1}`}>
                    <ProductCategoryText>{c.categoryName}</ProductCategoryText>
                  </ProductCategoryWrapper>
                  <Divider />
                </>
              )}
              {getProductItemByCategory(c.categoryId).map((p, idx) => (
                <React.Fragment key={p.productId}>
                  <ProductWrapper key={idx} onClick={() => openProductPreviewDrawer(p.productId)}>
                    <ProductImage src={p.productImage} />
                    <ProductContent>
                      <ProductNameText>{p.productName}</ProductNameText>
                      <ProductDescriptionText>{p.productDescription}</ProductDescriptionText>
                      <ProductInfo>
                        {p.isProductPriceDiscount && (
                          <ProductPriceText>{p.productPrice.toLocaleString()}</ProductPriceText>
                        )}
                        <ProductNettText>{p.productPriceNett.toLocaleString()}</ProductNettText>
                        <PromoLabel />
                      </ProductInfo>
                      <ProductCounter>
                        {getProductQtyInCart(p.productId) > 0 && (
                          <>
                            <RemoveCircleOutlineRoundedIcon
                              onClick={(event) => {
                                event.stopPropagation()
                                if (p.isProductVariant) {
                                  openDrawerVariant(p.productId)
                                }
                              }}
                            />
                            <Typography>{getProductQtyInCart(p.productId)}</Typography>
                            <AddCircleOutlineRoundedIcon
                              onClick={(event) => {
                                event.stopPropagation()
                                if (p.isProductVariant) {
                                  openDrawerVariant(p.productId)
                                }
                              }}
                            />
                          </>
                        )}
                        {getProductQtyInCart(p.productId) === 0 && (
                          <TexasButton
                            variant="outlined"
                            size="medium"
                            sx={{ padding: '2px 16px', fontWeight: 'bold' }}
                            onClick={(event) => {
                              event.stopPropagation()
                              if (p.isProductVariant) {
                                openDrawerVariant(p.productId)
                              }
                            }}
                          >
                            {t('add')}
                          </TexasButton>
                        )}
                      </ProductCounter>
                    </ProductContent>
                  </ProductWrapper>
                  <Divider />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
          <Box minHeight={64} />
        </>
      )}
    </ProductListWrapper>
  )
}
