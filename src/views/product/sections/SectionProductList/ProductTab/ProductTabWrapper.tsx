import { Stack, StackProps, styled } from '@mui/material'

export const ProductTabWrapper = styled((props: StackProps) => (
  <Stack
    position="sticky"
    top={0}
    bgcolor="white"
    zIndex={2}
    justifyContent="center"
    overflow="hidden"
    {...props}
  />
))(() => ({
  transitionDuration: '300ms',
}))
