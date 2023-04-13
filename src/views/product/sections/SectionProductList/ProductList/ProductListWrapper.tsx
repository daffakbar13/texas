import { Stack, StackProps, styled } from '@mui/material'

export const ProductListWrapper = styled((props: StackProps) => (
  <Stack height="100%" zIndex={1} {...props} />
))(() => ({}))
