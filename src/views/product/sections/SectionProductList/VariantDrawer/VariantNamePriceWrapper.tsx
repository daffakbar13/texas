import { Box, BoxProps, styled } from '@mui/material'

export const VariantNamePriceWrapper = styled((props: BoxProps) => (
  <Box {...props} display="flex" flexGrow={1} justifyContent="space-between" alignItems="center" />
))(() => ({
  '& .MuiTypography-root': {
    fontSize: 14,
  },
}))
