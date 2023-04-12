import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box } from '@mui/material'
import { useMainStore } from '@texas/utils/stores'
import { TexasButton } from '@texas/components'
import useProductStore from '@texas/utils/stores/product'
import { useTranslation } from 'react-i18next'

export default function SectionCart() {
  const { sideOffset } = useMainStore()
  const { isShowFloatingCartButton, showCartFloatingButton } = useProductStore()
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
      <Box
        width={isShowFloatingCartButton ? '100%' : 36.5}
        sx={{ transitionDuration: '300ms' }}
        bgcolor="white"
        borderRadius={1}
        boxShadow="0px 0px 8px rgba(0, 0, 0, 0.5)"
      >
        <TexasButton
          size="medium"
          fullWidth
          onClick={(e) => {
            e.stopPropagation()
            showCartFloatingButton()
          }}
          sx={{ minWidth: 0 }}
        >
          <Box display="flex" gap={0.5} alignItems="center">
            <ShoppingCartOutlinedIcon />
            {isShowFloatingCartButton && (
              <>
                <Box>{t('viewCart')}</Box>
                <Box>-</Box>
                <Box>{Number(18000).toLocaleString()}</Box>
              </>
            )}
          </Box>
        </TexasButton>
      </Box>
    </Box>
  )
}
