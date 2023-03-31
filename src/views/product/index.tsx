import { Search } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ILDummyPromoBanner, ILDummyServing } from '@texas/assets'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import { useRouter } from 'next/router'
import useProductStore from '@texas/utils/stores/product'

export default function Product() {
  const { searchKeyword, changeSearchKeyword } = useProductStore()
  const router = useRouter()
  const isOnSearch = router.query.view_mode === 'search'

  React.useEffect(() => {
    router.beforePopState(() => {
      changeSearchKeyword('', router)
      return true
    })
  })

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
        value={searchKeyword}
        onChange={(e) => changeSearchKeyword(e.target.value, router)}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        overflow="hidden"
        sx={{ height: isOnSearch ? 0 : '100%', transitionDuration: '300ms' }}
      >
        <Box width="100%" height={96} position="relative">
          <Image
            src={ILDummyPromoBanner.src}
            alt="Promo Banner"
            fill
            objectFit="cover"
            style={{ borderRadius: 16 }}
          />
        </Box>
        <Box display="flex" gap={1}>
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
              <Button
                key={i}
                size="small"
                variant={i === 0 ? 'contained' : 'outlined'}
                sx={{ textTransform: 'none' }}
              >
                {e}
              </Button>
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={2} height="100%" overflow="scroll">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <Box key={i} display="flex" gap={1}>
              <Image
                src={ILDummyServing.src}
                alt="Product Image"
                height={88}
                width={88}
                style={{ borderRadius: 8 }}
              />
              <Box display="flex" flexDirection="column" gap={0.5}>
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: '15px',
                  }}
                >
                  Combo Spicy Burger Double Slices With Sauce BBQ
                </Typography>
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    fontSize: 13,
                    lineHeight: '14px',
                  }}
                >
                  2x Cheese Beef Burgers, 2x Friench Fries, BBQ Sauce, Lettuce, 2x Coca Cola
                </Typography>
                <Box display="flex" gap={0.5}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }}>
                    {(48000).toLocaleString()}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'grey.600',
                      textDecorationLine: 'line-through',
                    }}
                  >
                    {(73000).toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}
