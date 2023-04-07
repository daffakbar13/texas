import * as React from 'react'
import Box from '@mui/material/Box'
import { useMainStore } from '@texas/utils/stores'
import Typography from '@mui/material/Typography'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import DinnerDiningRoundedIcon from '@mui/icons-material/DinnerDiningRounded'
import { TexasSwipeableDrawer } from '@texas/components'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'
import { useTranslation } from 'react-i18next'

export default function SwipeableTemporaryDrawer() {
  const { isMainDrawerOpen, openLanguageDrawer, openMainDrawer, closeMainDrawer } = useMainStore()
  const { t } = useTranslation()

  const mainDrawerMenu = [
    { name: t('myOrder'), Icon: DinnerDiningRoundedIcon },
    {
      name: t('language'),
      Icon: TranslateRoundedIcon,
      onClick: (e: Parameters<React.MouseEventHandler<HTMLDivElement>>['0']) => {
        closeMainDrawer(e)
        openLanguageDrawer()
      },
    },
  ]

  return (
    <TexasSwipeableDrawer
      anchor="right"
      open={isMainDrawerOpen}
      onClose={closeMainDrawer}
      onOpen={openMainDrawer}
    >
      <Box
        sx={{ width: 180 }}
        role="presentation"
        display="flex"
        flexDirection="column"
        gap={3}
        height="100vh"
        padding={2}
      >
        <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>Hi, Daffa Akbar</Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {mainDrawerMenu.map((e, i) => (
            <Box
              key={i}
              sx={{ cursor: 'pointer', ':hover': { color: 'primary.main' } }}
              display="flex"
              alignItems="center"
              gap={1}
              onClick={e.onClick}
            >
              <e.Icon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: 14 }}>{e.name}</Typography>
            </Box>
          ))}
          <Box
            sx={{ cursor: 'pointer' }}
            display="flex"
            alignItems="center"
            gap={1}
            color="error.main"
          >
            <LogoutRoundedIcon sx={{ fontSize: 16, color: 'error.main' }} />
            <Typography sx={{ fontSize: 14 }}>{t('signOut')}</Typography>
          </Box>
        </Box>
      </Box>
    </TexasSwipeableDrawer>
  )
}
