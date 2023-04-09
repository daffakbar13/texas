import { Box, BoxProps, styled } from '@mui/material'

export const VariantDrawerWrapper = styled((props: BoxProps) => (
  <Box {...props} display="flex" flexDirection="column" overflow="hidden" gap={2} padding={2} />
))(() => ({}))
