import { Divider } from '@mui/material'
import React from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
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
import ProductImage from './ProductImage'
import { ProductContent } from './ProductContent'
import { ProductInfo } from './ProductInfo'
import { ProductCounter } from './ProductCounter'

export default function ProductList() {
  const {
    productCategory,
    showDrawerVariant,
    onScrollProductList,
    openDrawerVariant,
    getProductItemByCategory,
    isTriggerLoading,
    openProductPreviewDrawer,
  } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'
  const isDrawerVariantOpen = Boolean(showDrawerVariant)

  return (
    <ProductListWrapper {...(!isTriggerLoading() && { onScroll: onScrollProductList })}>
      {isTriggerLoading() && !isDrawerVariantOpen && <ProductLoader />}
      {(!isTriggerLoading() || isDrawerVariantOpen) && (
        <>
          {productCategory?.data?.categories.map((c, i) => (
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
                        <AddCircleOutlineRoundedIcon
                          onClick={(event) => {
                            event.stopPropagation()
                            if (p.isProductVariant) {
                              openDrawerVariant(p.productId)
                            }
                          }}
                        />
                      </ProductCounter>
                    </ProductContent>
                  </ProductWrapper>
                  <Divider />
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </>
      )}
    </ProductListWrapper>
  )
}
