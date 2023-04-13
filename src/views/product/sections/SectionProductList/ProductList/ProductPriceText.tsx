import { Typography, styled } from '@mui/material'

export const ProductPriceText = styled(Typography)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 'bold',
  textDecorationLine: 'line-through',
  color: theme.palette.grey[600],
}))
