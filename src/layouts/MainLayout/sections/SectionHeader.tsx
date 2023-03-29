import { Box, Collapse, IconButton } from '@mui/material'
import { ICPosliveLogoText } from '@texas/assets'
import Image from 'next/image'
import React from 'react'
import { useMainStore } from '@texas/utils/stores'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'

export default function SectionHeader() {
  const { isOnSearch, openMainDrawer, setOnSearch } = useMainStore()

  return (
    <>
      <Box
        component="header"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft={2}
        paddingRight={2}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Collapse in={isOnSearch} orientation="horizontal">
            <IconButton onClick={() => setOnSearch(false)}>
              <ChevronLeftRoundedIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Collapse>
          <Image src={ICPosliveLogoText.src} alt="Poslive Logo" width={96} height={48} />
        </Box>
        <IconButton onClick={openMainDrawer}>
          <MenuRoundedIcon sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
    </>
  )
}
