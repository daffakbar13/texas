import { Box, BoxProps, styled } from '@mui/material'

export const VariantItemWrapper = styled((props: BoxProps) => (
  <Box {...props} display="flex" gap={1} paddingTop={1} paddingBottom={1} />
))(() => ({}))
