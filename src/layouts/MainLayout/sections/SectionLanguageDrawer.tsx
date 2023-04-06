import * as React from 'react'
import Box from '@mui/material/Box'
import { useMainStore } from '@texas/utils/stores'
import Typography from '@mui/material/Typography'
import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useMainStorage } from '@texas/utils/storages'

export default function SwipeableTemporaryDrawer() {
  const { language, setLanguage } = useMainStorage()
  const { isLanguageDrawerOpen, openLanguageDrawer, closeLanguageDrawer } = useMainStore()

  return (
    <TexasSwipeableDrawer
      anchor="bottom"
      open={isLanguageDrawerOpen}
      onClose={closeLanguageDrawer}
      onOpen={openLanguageDrawer}
    >
      <Box display="flex" flexDirection="column" gap={2} padding={2}>
        <Typography sx={{ fontWeight: 'bold' }}>Change Language</Typography>
        <FormControl size="small">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <FormControlLabel
              sx={{ '& span': { fontSize: 14 } }}
              value="en"
              checked={language === 'en'}
              control={<Radio size="small" />}
              label="English"
            />
            <FormControlLabel
              sx={{ '& span': { fontSize: 14 } }}
              value="id"
              checked={language === 'id'}
              control={<Radio size="small" />}
              label="Indonesian"
            />
          </RadioGroup>
        </FormControl>
        <TexasButton size="medium" onClick={closeLanguageDrawer}>
          Close
        </TexasButton>
      </Box>
    </TexasSwipeableDrawer>
  )
}
