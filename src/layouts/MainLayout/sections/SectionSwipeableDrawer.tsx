import * as React from 'react'
import Box from '@mui/material/Box'
import { useMainStore } from '@texas/utils/stores'
import Typography from '@mui/material/Typography'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import DinnerDiningRoundedIcon from '@mui/icons-material/DinnerDiningRounded'
import { TexasSwipeableDrawer } from '@texas/components'

export default function SwipeableTemporaryDrawer() {
  const { isMainDrawerOpen, openMainDrawer, closeMainDrawer } = useMainStore()

  return (
    <TexasSwipeableDrawer
      anchor="right"
      open={isMainDrawerOpen}
      onClose={closeMainDrawer}
      onOpen={openMainDrawer}
    >
      <Box
        sx={{ width: 220 }}
        role="presentation"
        onClick={closeMainDrawer}
        onKeyDown={closeMainDrawer}
        display="flex"
        flexDirection="column"
        gap={3}
        height="100vh"
        padding={2}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>Hi, Daffa Akbar</Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <DinnerDiningRoundedIcon />
            <Typography>My Order</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1} color="error.main">
            <LogoutRoundedIcon sx={{ color: 'error.main' }} />
            <Typography>Sign Out</Typography>
          </Box>
        </Box>
      </Box>
    </TexasSwipeableDrawer>
  )
}
