import { Box, BoxProps, styled } from '@mui/material'

export const PromoLabel = styled((props: BoxProps) => <Box {...props}>Promo</Box>)(({ theme }) => ({
  padding: '4px 8px',
  backgroundColor: theme.palette.error.main,
  color: 'white',
  fontSize: 11,
  borderRadius: '12.25px',
}))
