import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box, Stack } from '@mui/material'
import { useMainStore } from '@texas/utils/stores'
import { TexasButton } from '@texas/components'
import useProductStore from '@texas/utils/stores/product'
import { useTranslation } from 'react-i18next'

export default function SectionCart() {
  const { sideOffset } = useMainStore()
  const { isShowFloatingCartButton, showCartFloatingButton } = useProductStore()
  const { isHaveCart, getTotalPriceInCart } = useProductStore()
  const { t } = useTranslation()
  const leftOrRight = sideOffset + 16

  return (
    <Box
      display="flex"
      justifyContent="end"
      position="fixed"
      bottom={16}
      left={leftOrRight}
      right={leftOrRight}
      role="presentation"
      zIndex={900}
    >
      {isHaveCart() && (
        <Box
          width={isShowFloatingCartButton ? '100%' : 48}
          sx={{ transitionDuration: '300ms' }}
          bgcolor="white"
          borderRadius={48 / 2 / 8}
          boxShadow="0px 0px 8px rgba(0, 0, 0, 0.25)"
        >
          <TexasButton
            fullWidth
            onClick={(e) => {
              e.stopPropagation()
              showCartFloatingButton()
            }}
            sx={{ padding: 1, borderRadius: 48 / 2 / 8 }}
          >
            <Stack
              direction="row"
              gap={0.5}
              alignItems="center"
              overflow="hidden"
              height={32}
              width={isShowFloatingCartButton ? 'auto' : 32}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 32 }} />
              <Box>{t('viewCart')}</Box>
              <Box>-</Box>
              <Box>{Number(getTotalPriceInCart()).toLocaleString()}</Box>
            </Stack>
          </TexasButton>
        </Box>
      )}
    </Box>
  )
}
