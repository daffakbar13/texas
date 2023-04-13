import { Typography, styled } from '@mui/material'

export const ProductNettText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}))
