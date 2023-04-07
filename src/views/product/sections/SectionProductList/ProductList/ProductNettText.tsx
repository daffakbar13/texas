import { Typography, styled } from '@mui/material'

export const ProductNettText = styled(Typography)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}))
