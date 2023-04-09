import { Box, BoxProps, styled } from '@mui/material'

export const ProductContent = styled((props: BoxProps) => (
  <Box {...props} display="flex" flexDirection="column" gap={1} flexGrow={1} />
))(() => ({}))
