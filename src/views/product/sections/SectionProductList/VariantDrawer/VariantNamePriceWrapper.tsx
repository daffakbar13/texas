import { Stack, StackProps, styled } from '@mui/material'

export const VariantNamePriceWrapper = styled((props: StackProps) => (
  <Stack
    {...props}
    direction="row"
    gap={1}
    flexGrow={1}
    justifyContent="space-between"
    alignItems="center"
  />
))(() => ({
  '& .MuiTypography-root': {
    fontSize: 15,
    // fontWeight: 'bold',
  },
}))
