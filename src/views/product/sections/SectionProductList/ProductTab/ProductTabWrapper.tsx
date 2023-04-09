import { Box, styled } from '@mui/material'

export const ProductTabWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: '8px 0',
  borderColor: theme.palette.grey[200],
}))
