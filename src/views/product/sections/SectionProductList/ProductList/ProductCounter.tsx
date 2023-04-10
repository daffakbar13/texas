import { Box, BoxProps, styled } from '@mui/material'

export const ProductCounter = styled((props: BoxProps) => (
  <Box
    {...props}
    display="flex"
    justifyContent="end"
    color="primary.main"
    gap={1}
    alignItems="center"
    zIndex={900}
    position="relative"
  />
))(() => ({
  '& svg': {
    cursor: 'pointer',
  },
  '& .MuiTypography-root': {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '16px',
  },
}))
