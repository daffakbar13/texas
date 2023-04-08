import * as React from 'react'
import Box from '@mui/material/Box'
import { useMainStore } from '@texas/utils/stores'
import Typography from '@mui/material/Typography'
import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useMainStorage } from '@texas/utils/storages'
import { useTranslation } from 'react-i18next'

export default function SwipeableTemporaryDrawer() {
  const { language, setLanguage } = useMainStorage()
  const { isLanguageDrawerOpen, openLanguageDrawer, closeLanguageDrawer } = useMainStore()
  const { t } = useTranslation()

  const languages = [
    {
      label: 'english',
      value: 'en',
    },
    {
      label: 'indonesian',
      value: 'id',
    },
  ]

  return (
    <TexasSwipeableDrawer
      anchor="bottom"
      open={isLanguageDrawerOpen}
      onClose={closeLanguageDrawer}
      onOpen={openLanguageDrawer}
    >
      <Box display="flex" flexDirection="column" gap={2} padding={2}>
        <Typography sx={{ fontWeight: 'bold' }}>{t('changeLanguage')}</Typography>
        <FormControl size="small">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((e, i) => (
              <FormControlLabel
                key={i}
                sx={{ '& span': { fontSize: 14 } }}
                value={e.value}
                checked={language === e.value}
                control={<Radio size="small" />}
                label={t(e.label)}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <TexasButton size="medium" onClick={closeLanguageDrawer}>
          {t('close')}
        </TexasButton>
      </Box>
    </TexasSwipeableDrawer>
  )
}
