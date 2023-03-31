import { Search } from '@mui/icons-material'
import { Box, Button, Collapse, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ILDummyPromoBanner } from '@texas/assets'
import { useMainStore } from '@texas/utils/stores'
import ListRoundedIcon from '@mui/icons-material/ListRounded'

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
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <Box width="100%" height={96} position="relative">
            <Image
              src={ILDummyPromoBanner.src}
              alt="Promo Banner"
              fill
              objectFit="cover"
              style={{ borderRadius: 16 }}
            />
          </Box>
          <Box display="flex" gap={1} maxWidth={600 - 32} overflow="scroll">
            <Button size="small" variant="outlined" sx={{ padding: 0.5, minWidth: 0 }}>
              <ListRoundedIcon />
            </Button>
            <Box display="flex" gap={1} width="100%" overflow="scroll">
              {[
                'Foods',
                'Drinks',
                'Burger',
                'Pizza',
                'Tea',
                'Coffee',
                'Foods',
                'Drinks',
                'Burger',
                'Pizza',
                'Tea',
                'Coffee',
              ].map((e, i) => (
                <Button key={i} size="small" variant={i === 0 ? 'contained' : 'outlined'}>
                  {e}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Collapse>
    </>
  )
}
