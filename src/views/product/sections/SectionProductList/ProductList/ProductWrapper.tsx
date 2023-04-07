import { Box, styled } from '@mui/material'

export const ProductWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  borderBottom: '1px solid',
  borderColor: theme.palette.grey[200],
  padding: '16px 0',
}))
