import { Search } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ILDummyPromoBanner } from '@texas/assets'
import ListRoundedIcon from '@mui/icons-material/ListRounded'
import { useRouter } from 'next/router'
import useProductStore from '@texas/utils/stores/product'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { SERVING_DUMMY } from './constants'

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
              <Search />
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
        <Box width="100%" height={144} position="relative">
          <Image
            src={ILDummyPromoBanner.src}
            alt="Promo Banner"
            fill
            objectFit="cover"
            style={{ borderRadius: 16 }}
          />
        </Box>
        <Box display="flex" flexDirection="column" height="100%" sx={{ overflowX: 'hidden' }}>
          <Box
            display="flex"
            gap={1}
            padding="8px 0"
            borderBottom="1px solid"
            borderColor="grey.200"
          >
            <Button size="small" variant="outlined" sx={{ padding: 0.5, minWidth: 0 }}>
              <ListRoundedIcon />
            </Button>
            <Box display="flex" gap={1} width="100%" overflow="scroll">
              {SERVING_DUMMY.map((e, i) => (
                <Button
                  key={i}
                  size="small"
                  variant={i === 0 ? 'contained' : 'outlined'}
                  sx={{ textTransform: 'none' }}
                >
                  {e.servingCategoryName}
                </Button>
              ))}
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" height="100%" overflow="scroll">
            {SERVING_DUMMY.map((e, i) => (
              <React.Fragment key={i}>
                <Box
                  display="flex"
                  gap={2}
                  borderBottom="1px solid"
                  borderColor="grey.200"
                  padding="8px 0"
                >
                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                      fontSize: 16,
                      fontWeight: 'bold',
                      lineHeight: '17px',
                    }}
                  >
                    {e.servingCategoryName}
                  </Typography>
                </Box>
                {e.servingItems.map((s, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    gap={2}
                    borderBottom="1px solid"
                    borderColor="grey.200"
                    padding="16px 0"
                  >
                    <Image
                      src={s.servingImage}
                      alt="Product Image"
                      height={96}
                      width={96}
                      style={{ borderRadius: 8 }}
                    />
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Typography
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          fontSize: 13,
                          fontWeight: 'bold',
                          lineHeight: '14px',
                        }}
                      >
                        {s.servingName}
                      </Typography>
                      <Typography
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          fontSize: 12,
                          lineHeight: '13px',
                          color: 'grey.600',
                        }}
                      >
                        {s.servingDescription}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Typography
                          sx={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: 'grey.600',
                            textDecorationLine: 'line-through',
                          }}
                        >
                          {s.servingPrice.toLocaleString()}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: 'primary.main',
                          }}
                        >
                          {s.servingNett.toLocaleString()}
                        </Typography>
                        <Box
                          padding="4px 8px"
                          bgcolor="error.main"
                          color="white"
                          fontSize={11}
                          borderRadius="12.25px"
                        >
                          Promo
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="end">
                        <Box display="flex" alignItems="center" gap={1} color="primary.main">
                          <RemoveCircleOutlineRoundedIcon />
                          <Typography sx={{ fontSize: 14, fontWeight: 'bold', lineHeight: '16px' }}>
                            1
                          </Typography>
                          <AddCircleOutlineRoundedIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
