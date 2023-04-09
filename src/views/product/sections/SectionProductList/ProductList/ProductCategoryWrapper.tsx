import { Box, styled } from '@mui/material'

export const ProductCategoryWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: '8px 0',
}))
