import { Box, Collapse, IconButton } from '@mui/material'
import { ICStarbucksLogo } from '@texas/assets'
import Image from 'next/image'
import React from 'react'
import { useMainStore } from '@texas/utils/stores'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import { useRouter } from 'next/router'
import useProductStore from '@texas/utils/stores/product'

export default function SectionHeader() {
  const { openMainDrawer } = useMainStore()
  const { changeSearchKeyword } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'

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
        <Box display="flex" alignItems="center" gap={1} padding="8px 0">
          <Collapse in={isOnSearch} orientation="horizontal">
            <IconButton onClick={() => changeSearchKeyword('', router)}>
              <ChevronLeftRoundedIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Collapse>
          <Image
            src={ICStarbucksLogo.src}
            alt="Poslive Logo"
            width={ICStarbucksLogo.width / (ICStarbucksLogo.height / 40)}
            height={40}
          />
        </Box>
        <IconButton onClick={openMainDrawer}>
          <MenuRoundedIcon sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
    </>
  )
}
