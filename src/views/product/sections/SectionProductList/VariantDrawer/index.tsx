import { Box, Typography, Divider, Radio, Checkbox } from '@mui/material'
import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
import * as React from 'react'
import Image from 'next/image'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import useProductStore from '@texas/utils/stores/product'
import { useMainStorage } from '@texas/utils/storages'
import { ProductDescriptionText } from '../ProductList/ProductDescriptionText'
import { ProductNameText } from '../ProductList/ProductNameText'
import { ProductNettText } from '../ProductList/ProductNettText'
import { ProductPriceText } from '../ProductList/ProductPriceText'
import { ProductWrapper } from '../ProductList/ProductWrapper'
import { PromoLabel } from '../ProductList/PromoLabel'
import VariantLoader from './VariantLoader'

export default function VariantDrawer() {
  const { language } = useMainStorage()
  const {
    showDrawerVariant,
    selectedProductId,
    temporarySelectedQty,
    openDrawerVariant,
    closeDrawerVariant,
    generateSelectionText,
    getVariantByProductId,
    getProductById,
    isTriggerLoading,
    isCheckedVariant,
    handleAddVariantItem,
    getItemSubTotal,
    handleAddItemQty,
    handleReduceItemQty,
  } = useProductStore()
  const isOpen = Boolean(showDrawerVariant)
  const selectedItem = getProductById()
  const variantList = getVariantByProductId()

  return (
    <TexasSwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={closeDrawerVariant}
      onOpen={() => openDrawerVariant(selectedProductId)}
    >
      <Box display="flex" flexDirection="column" overflow="hidden" gap={2} padding={2}>
        <Typography sx={{ fontWeight: 'bold' }}>Add New Item</Typography>
        <VariantLoader />
        {selectedItem && !isTriggerLoading() && (
          <>
            <Box>
              <Divider />
              <ProductWrapper>
                <Image
                  src={selectedItem.productImage}
                  alt="Product Image"
                  height={96}
                  width={96}
                  style={{ borderRadius: 8 }}
                />
                <Box display="flex" flexDirection="column" gap={1}>
                  <ProductNameText>{selectedItem.productName}</ProductNameText>
                  <ProductDescriptionText>{selectedItem.productDescription}</ProductDescriptionText>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <ProductPriceText>
                      {selectedItem.productPrice.toLocaleString()}
                    </ProductPriceText>
                    <ProductNettText>
                      {selectedItem.productPriceNett.toLocaleString()}
                    </ProductNettText>
                    <PromoLabel />
                  </Box>
                  <Box display="flex" justifyContent="end">
                    <Box display="flex" alignItems="center" gap={1} color="primary.main">
                      <RemoveCircleOutlineRoundedIcon
                        onClick={handleReduceItemQty}
                        sx={{ ...(temporarySelectedQty === 1 && { color: 'grey.600' }) }}
                      />
                      <Typography sx={{ fontSize: 14, fontWeight: 'bold', lineHeight: '16px' }}>
                        {temporarySelectedQty}
                      </Typography>
                      <AddCircleOutlineRoundedIcon onClick={handleAddItemQty} />
                    </Box>
                  </Box>
                </Box>
              </ProductWrapper>
            </Box>
            <Box display="flex" flexDirection="column" gap={2} maxHeight="100%" overflow="scroll">
              {variantList.map((e, i) => {
                const selectText = generateSelectionText(e, language)
                const isRadio = selectText === 'Select 1' || selectText === 'Pilih 1'
                return (
                  <React.Fragment key={i}>
                    <Box display="flex" flexDirection="column">
                      <Typography sx={{ fontWeight: 'bold' }}>{e.variantCategoryName}</Typography>
                      <Box display="flex" gap={2}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            color: e.setVariantMin ? 'primary.main' : 'grey.400',
                            fontWeight: 'bold',
                          }}
                        >
                          {e.setVariantMin ? 'Required' : 'Optional'}
                        </Typography>
                        <Typography component="li" sx={{ fontSize: 13, color: 'grey.400' }}>
                          {selectText}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {e.variants.map((v, idx) => (
                        <Box key={idx} display="flex" gap={1}>
                          <Box
                            flexGrow={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                          >
                            <Typography sx={{ fontSize: 14 }}>{v.itemVariantName}</Typography>
                            <Typography sx={{ fontSize: 14 }}>
                              {v.itemVariantPrice === 0
                                ? 'Free'
                                : v.itemVariantPrice.toLocaleString()}
                            </Typography>
                          </Box>
                          {isRadio && <Radio checked={false} size="small" sx={{ padding: 0 }} />}
                          {!isRadio && (
                            <Checkbox
                              size="small"
                              sx={{ padding: 0 }}
                              checked={isCheckedVariant(v.itemVariantId)}
                              onClick={() =>
                                handleAddVariantItem(v.itemVariantCategoryId, v.itemVariantId)
                              }
                            />
                          )}
                        </Box>
                      ))}
                    </Box>
                  </React.Fragment>
                )
              })}
            </Box>
            <TexasButton size="medium" onClick={closeDrawerVariant}>
              Add To Cart - {getItemSubTotal().toLocaleString()}
            </TexasButton>
          </>
        )}
      </Box>
    </TexasSwipeableDrawer>
  )
}
