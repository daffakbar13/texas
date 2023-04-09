import { Box, BoxProps, styled } from '@mui/material'

export const VariantCategoryWrapper = styled((props: BoxProps) => (
  <Box {...props} display="flex" flexDirection="column" />
))(() => ({}))
