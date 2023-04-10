import { Box, Typography, Divider, Radio, Checkbox } from '@mui/material'
import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
import React from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import useProductStore from '@texas/utils/stores/product'
import { useMainStorage } from '@texas/utils/storages'
import { useTranslation } from 'react-i18next'
import { ProductDescriptionText } from '../ProductList/ProductDescriptionText'
import { ProductNameText } from '../ProductList/ProductNameText'
import { ProductNettText } from '../ProductList/ProductNettText'
import { ProductPriceText } from '../ProductList/ProductPriceText'
import { ProductWrapper } from '../ProductList/ProductWrapper'
import { PromoLabel } from '../ProductList/PromoLabel'
import VariantLoader from './VariantLoader'
import ProductImage from '../ProductList/ProductImage'
import { ProductContent } from '../ProductList/ProductContent'
import { ProductInfo } from '../ProductList/ProductInfo'
import { ProductCounter } from '../ProductList/ProductCounter'
import { VariantDrawerWrapper } from './VariantDrawerWrapper'
import { VariantListWrapper } from './VariantListWrapper'
import { VariantCategoryWrapper } from './VariantCategoryWrapper'
import { VariantCategoryText } from './VariantCategoryText'
import { VariantCategoryInfoWrapper } from './VariantCategoryInfoWrapper'
import { VariantItemWrapper } from './VariantItemWrapper'
import { VariantNamePriceWrapper } from './VariantNamePriceWrapper'

export default function VariantDrawer() {
  const { t } = useTranslation()
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
      <VariantDrawerWrapper>
        <Typography sx={{ fontWeight: 'bold' }}>{t('addNewItem')}</Typography>
        <VariantLoader />
        {isOpen && selectedItem && !isTriggerLoading() && (
          <>
            <Box>
              <Divider />
              <ProductWrapper>
                <ProductImage src={selectedItem.productImage} />
                <ProductContent>
                  <ProductNameText>{selectedItem.productName}</ProductNameText>
                  <ProductDescriptionText>{selectedItem.productDescription}</ProductDescriptionText>
                  <ProductInfo>
                    {selectedItem.isProductPriceDiscount && (
                      <ProductPriceText>
                        {selectedItem.productPrice.toLocaleString()}
                      </ProductPriceText>
                    )}
                    <ProductNettText>
                      {selectedItem.productPriceNett.toLocaleString()}
                    </ProductNettText>
                    <PromoLabel />
                  </ProductInfo>
                  <ProductCounter>
                    <RemoveCircleOutlineRoundedIcon
                      onClick={handleReduceItemQty}
                      sx={{ ...(temporarySelectedQty === 1 && { color: 'grey.600' }) }}
                    />
                    <Typography>{temporarySelectedQty}</Typography>
                    <AddCircleOutlineRoundedIcon onClick={handleAddItemQty} />
                  </ProductCounter>
                </ProductContent>
              </ProductWrapper>
              <Divider />
            </Box>
            <VariantListWrapper>
              {variantList.map((e, i) => {
                const selectText = generateSelectionText(e, language)
                const isRadio = selectText === 'Select 1' || selectText === 'Pilih 1'
                const CheckboxOrRadio = isRadio ? Radio : Checkbox
                return (
                  <React.Fragment key={i}>
                    <VariantCategoryWrapper>
                      <VariantCategoryText>{e.variantCategoryName}</VariantCategoryText>
                      <VariantCategoryInfoWrapper>
                        <Typography
                          sx={{
                            ...(e.setVariantMin && { color: 'primary.main' }),
                            fontWeight: 'bold',
                          }}
                        >
                          {t(e.setVariantMin ? 'required' : 'optional')}
                        </Typography>
                        <Typography component="li">{selectText}</Typography>
                      </VariantCategoryInfoWrapper>
                    </VariantCategoryWrapper>
                    <Box display="flex" flexDirection="column">
                      {e.variants.map((v, idx, arr) => (
                        <React.Fragment key={v.itemVariantId}>
                          <Divider />
                          <VariantItemWrapper
                            onClick={() =>
                              handleAddVariantItem(v.itemVariantCategoryId, v.itemVariantId)
                            }
                          >
                            <VariantNamePriceWrapper>
                              <Typography>{v.itemVariantName}</Typography>
                              <Typography>
                                {v.itemVariantPrice === 0
                                  ? t('free')
                                  : `+${v.itemVariantPrice.toLocaleString()}`}
                              </Typography>
                            </VariantNamePriceWrapper>
                            <CheckboxOrRadio
                              checked={isCheckedVariant(v.itemVariantId)}
                              size="small"
                              sx={{ padding: 0 }}
                            />
                          </VariantItemWrapper>
                          {idx === arr.length - 1 && <Divider />}
                        </React.Fragment>
                      ))}
                    </Box>
                  </React.Fragment>
                )
              })}
            </VariantListWrapper>
            <TexasButton size="medium" onClick={closeDrawerVariant}>
              {t('addToCart')} - {getItemSubTotal().toLocaleString()}
            </TexasButton>
          </>
        )}
      </VariantDrawerWrapper>
    </TexasSwipeableDrawer>
  )
}
