import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useMainStore } from '@texas/utils/stores'

export default function SwipeableTemporaryDrawer() {
  const { isMainDrawerOpen, openMainDrawer, closeMainDrawer, sideOffset } = useMainStore()

  return (
    <SwipeableDrawer
      anchor="right"
      open={isMainDrawerOpen}
      onClose={closeMainDrawer}
      onOpen={openMainDrawer}
      PaperProps={{ sx: { right: sideOffset } }}
      sx={{
        left: sideOffset,
        right: sideOffset,
        '& .MuiModal-backdrop': { left: sideOffset, right: sideOffset },
      }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={closeMainDrawer}
        onKeyDown={closeMainDrawer}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}
