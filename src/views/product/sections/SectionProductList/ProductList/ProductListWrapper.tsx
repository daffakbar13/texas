import { Box, BoxProps, styled } from '@mui/material'

export const ProductListWrapper = styled((props: BoxProps) => (
  <Box {...props} id="product-list-wrapper" />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'scroll',
}))
