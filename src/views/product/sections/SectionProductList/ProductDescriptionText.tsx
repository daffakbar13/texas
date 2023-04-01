import { Typography, styled } from '@mui/material'

export const ProductDescriptionText = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontSize: 12,
  lineHeight: '13px',
  color: theme.palette.grey[600],
}))
