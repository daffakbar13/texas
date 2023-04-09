import { Box, BoxProps, styled } from '@mui/material'

export const VariantCategoryInfoWrapper = styled((props: BoxProps) => (
  <Box {...props} display="flex" gap={2} />
))(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: 13,
  },
  ':last-child': {
    color: theme.palette.grey[400],
  },
}))
