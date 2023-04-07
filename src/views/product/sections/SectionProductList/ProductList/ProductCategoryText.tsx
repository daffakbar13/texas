import { Typography, styled } from '@mui/material'

export const ProductCategoryText = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontSize: 16,
  fontWeight: 'bold',
  lineHeight: '17px',
}))
