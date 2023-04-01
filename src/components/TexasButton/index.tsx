import { Button, ButtonProps, styled } from '@mui/material'

const TexasButton = styled((props: ButtonProps) => (
  <Button variant="contained" size="small" {...props} />
))(() => ({ textTransform: 'none' }))

export default TexasButton
