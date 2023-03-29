import { Search } from '@mui/icons-material'
import { Box, Collapse, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ILDummyPromoBanner } from '@texas/assets'
import { useMainStore } from '@texas/utils/stores'

export default function ServingList() {
  const { isOnSearch, setOnSearch } = useMainStore()
  return (
    <>
      <OutlinedInput
        id="outlined-adornment-password"
        size="small"
        fullWidth
        placeholder="Search..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <Search sx={{ color: 'text.primary' }} />
            </IconButton>
          </InputAdornment>
        }
        onClick={() => setOnSearch(true)}
      />
      <Collapse in={!isOnSearch}>
        <Box width="100%" height={96} position="relative">
          <Image
            src={ILDummyPromoBanner.src}
            alt="Promo Banner"
            fill
            objectFit="cover"
            style={{ borderRadius: 16 }}
          />
        </Box>
        <div>Hello World!</div>
      </Collapse>
    </>
  )
}
