import { Box } from '@mui/material'
import React from 'react'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import Image from 'next/image'
import { TexasButton } from '@texas/components'
import useProductStore from '@texas/utils/stores/product'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { getProductCategoryList, getProductItemList } from '@texas/services/ruby'
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
import CartDrawer from './CartDrawer'

export default function SectionProductList() {
  const {
    activeTab,
    productList,
    productListFiltered,
    onClickTabProductList,
    onScrollProductList,
    productScrollListener,
    openDrawerVariant,
  } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'
  const hideOnSearch = { ...(isOnSearch && { display: 'none' }) }

  const productCategory = useQuery(['Product Category'], () => getProductCategoryList('123'))
  const productItem = useQuery(['Product Item'], () => getProductItemList('123'))

  React.useEffect(() => {
    if (productCategory.isSuccess && productItem.isSuccess) {
      productScrollListener(productCategory.data.categories)
    }
  }, [productCategory.data, productItem.data])

  console.log(activeTab)

  return (
    <ProductListContainer>
      <ProductTabWrapper sx={hideOnSearch}>
        <TexasButton variant="outlined" sx={{ padding: 0.5, minWidth: 0 }}>
          <ListRoundedIcon />
        </TexasButton>
        <Box id="product-tab-scrollable-wrapper" display="flex" gap={1}>
          {productCategory.isSuccess && (
            <>
              {productCategory.data.categories.map((e, i) => (
                <TexasButton
                  key={i}
                  id={`product-tab-${i + 1}`}
                  variant={activeTab === i + 1 ? 'contained' : 'outlined'}
                  onClick={() => onClickTabProductList(i)}
                  sx={{ transitionDuration: '300ms' }}
                >
                  {e.categoryName}
                </TexasButton>
              ))}
            </>
          )}
        </Box>
      </ProductTabWrapper>
      <ProductListWrapper id="product-list-wrapper" onScroll={onScrollProductList}>
        {productCategory.isSuccess && productItem.isSuccess && (
          <>
            {productCategory.data.categories.map((e, i) => {
              const { products } = productItem.data
              const items = [...products].filter((pi) => pi.productCategoryId === e.categoryId)

              return (
                <React.Fragment key={i}>
                  <ProductCategoryWrapper id={`product-category-${i + 1}`} sx={hideOnSearch}>
                    <ProductCategoryText>{e.categoryName}</ProductCategoryText>
                  </ProductCategoryWrapper>
                  {items.map((s, idx) => (
                    <ProductWrapper key={idx}>
                      <Image
                        src={s.productImage}
                        alt="Product Image"
                        height={96}
                        width={96}
                        style={{ borderRadius: 8 }}
                      />
                      <Box display="flex" flexDirection="column" gap={1} width="100%">
                        <ProductNameText>{s.productName}</ProductNameText>
                        <ProductDescriptionText>{s.productDescription}</ProductDescriptionText>
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <ProductPriceText>{s.productPrice.toLocaleString()}</ProductPriceText>
                          <ProductNettText>{s.productPriceNett.toLocaleString()}</ProductNettText>
                          <PromoLabel />
                        </Box>
                        <Box display="flex" justifyContent="end">
                          <Box display="flex" alignItems="center" gap={1} color="primary.main">
                            <AddCircleOutlineRoundedIcon
                              sx={{ cursor: 'pointer' }}
                              {...(s.isHaveVariants && {
                                onClick: () => openDrawerVariant(i, idx),
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
      <CartDrawer />
    </ProductListContainer>
  )
}
