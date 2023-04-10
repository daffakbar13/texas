import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box } from '@mui/material'
import { useMainStore } from '@texas/utils/stores'

export default function SectionCart() {
  const { sideOffset } = useMainStore()

  return (
    <Box position="fixed" bottom={16} left={sideOffset + 16} role="presentation" zIndex={200}>
      <Box
        height={40}
        width={40}
        bgcolor="primary.main"
        padding={1}
        borderRadius={1}
        color="white"
        boxShadow="0px 0px 8px rgba(0, 0, 0, 0.5)"
      >
        <ShoppingCartOutlinedIcon />
      </Box>
    </Box>
  )
}
