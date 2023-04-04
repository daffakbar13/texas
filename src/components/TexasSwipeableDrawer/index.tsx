import { SwipeableDrawer, SwipeableDrawerProps } from '@mui/material'
import { useMainStore } from '@texas/utils/stores'
import React from 'react'

export default function TexasSwipeableDrawer(props: SwipeableDrawerProps) {
  const { anchor } = props
  const { sideOffset } = useMainStore()
  const isLeftOrRight = anchor === 'left' || anchor === 'right'
  const isTopOrBottom = anchor === 'top' || anchor === 'bottom'

  return (
    <SwipeableDrawer
      {...props}
      PaperProps={{
        sx: {
          ...(isTopOrBottom && {
            left: sideOffset,
            right: sideOffset,
            borderRadius: '16px 16px 0 0',
          }),
          ...(isLeftOrRight && { [anchor]: sideOffset }),
        },
      }}
      sx={{
        left: sideOffset,
        right: sideOffset,
        '& .MuiModal-backdrop': { left: sideOffset, right: sideOffset },
      }}
    />
  )
}
