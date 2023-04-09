import { Box, BoxProps, styled } from '@mui/material'

export const VariantListWrapper = styled((props: BoxProps) => (
  <Box {...props} display="flex" flexDirection="column" gap={2} flexGrow={1} overflow="scroll" />
))(() => ({}))
