import { Box } from '@mui/material'
import React from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import Image from 'next/image'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
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

export default function ProductList() {
  const {
    productCategory,
    productItems,
    onScrollProductList,
    productScrollListener,
    openDrawerVariant,
    getProductItemByCategory,
    isTriggerLoading,
  } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'

  React.useEffect(() => {
    if (productCategory?.data && productItems) {
      productScrollListener(productCategory.data.categories)
    }
  }, [productCategory, productItems])

  return (
    <ProductListWrapper
      id="product-list-wrapper"
      {...(!isTriggerLoading() && { onScroll: onScrollProductList })}
    >
      <ProductLoader />
      {!isTriggerLoading() && (
        <>
          {productCategory?.data?.categories.map((e, i) => {
            const items = getProductItemByCategory(e.categoryId)

            return (
              <React.Fragment key={i}>
                {!isOnSearch && (
                  <ProductCategoryWrapper id={`product-category-${i + 1}`}>
                    <ProductCategoryText>{e.categoryName}</ProductCategoryText>
                  </ProductCategoryWrapper>
                )}
                {items.map((s, idx) => (
                  <ProductWrapper key={idx}>
                    <Image
                      src={s.productImage}
                      alt="Product Image"
                      height={96}
                      width={96}
                      style={{ borderRadius: 8 }}
                    />
                    <Box display="flex" flexDirection="column" gap={1} flexGrow={1}>
                      <ProductNameText>{s.productName}</ProductNameText>
                      <ProductDescriptionText>{s.productDescription}</ProductDescriptionText>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        {s.isProductPriceDiscount && (
                          <ProductPriceText>{s.productPrice.toLocaleString()}</ProductPriceText>
                        )}
                        <ProductNettText>{s.productPriceNett.toLocaleString()}</ProductNettText>
                        <PromoLabel />
                      </Box>
                      <Box display="flex" justifyContent="end">
                        <Box display="flex" alignItems="center" gap={1} color="primary.main">
                          <AddCircleOutlineRoundedIcon
                            sx={{ cursor: 'pointer' }}
                            {...(s.isProductVariant && {
                              onClick: () => openDrawerVariant(s.productId),
                            })}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </ProductWrapper>
                ))}
              </React.Fragment>
            )
          })}
        </>
      )}
    </ProductListWrapper>
  )
}
