import { Box, BoxProps, styled } from '@mui/material'

export const ProductInfo = styled((props: BoxProps) => (
  <Box {...props} display="flex" alignItems="center" gap={0.5} />
))(() => ({}))
