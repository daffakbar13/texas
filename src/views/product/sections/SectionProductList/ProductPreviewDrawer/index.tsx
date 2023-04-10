import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
import { useTranslation } from 'react-i18next'
import useProductStore from '@texas/utils/stores/product'
import Image from 'next/image'
import { useMainStore } from '@texas/utils/stores'

export default function ProductPreviewDrawer() {
  const { contentWidth } = useMainStore()
  const {
    isProductPreviewDrawerOpen,
    selectedProductId,
    openProductPreviewDrawer,
    closeProductPreviewDrawer,
    getProductById,
    openDrawerVariant,
  } = useProductStore()
  const { t } = useTranslation()
  const product = getProductById()
  const imageSize = contentWidth - 32

  return (
    <TexasSwipeableDrawer
      anchor="bottom"
      open={isProductPreviewDrawerOpen}
      onClose={closeProductPreviewDrawer}
      onOpen={() => openProductPreviewDrawer(selectedProductId)}
    >
      {isProductPreviewDrawerOpen && product && (
        <Box display="flex" flexDirection="column" gap={2} padding={2}>
          <Box display="flex" flexDirection="column" gap={2} overflow="scroll">
            <Box
              width={imageSize}
              height={imageSize}
              borderRadius={1}
              position="relative"
              boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
            >
              <Image
                src={product.productImage || ''}
                alt="Product Image"
                fill
                style={{ borderRadius: 8 }}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography sx={{ fontWeight: 'bold' }}>{product.productName}</Typography>
              <Typography sx={{ fontSize: 14, color: 'grey.600' }}>
                {product.productDescription}
              </Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                {product.isProductPriceDiscount && (
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'grey.600',
                      textDecorationLine: 'line-through',
                    }}
                  >
                    {product.productPrice.toLocaleString()}
                  </Typography>
                )}
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: 'primary.main' }}>
                  {product.productPriceNett.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>
          <TexasButton
            size="medium"
            onClick={() => {
              closeProductPreviewDrawer()
              if (product.isProductVariant) {
                openDrawerVariant(product.productId)
              }
            }}
          >
            {t('addToCart')}
          </TexasButton>
        </Box>
      )}
    </TexasSwipeableDrawer>
  )
}
