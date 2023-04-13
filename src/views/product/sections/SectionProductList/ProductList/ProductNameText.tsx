import { Typography, styled } from '@mui/material'

export const ProductNameText = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: '17px',
}))
