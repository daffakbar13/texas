import * as React from 'react'
import Box from '@mui/material/Box'
import { useMainStore } from '@texas/utils/stores'
import Typography from '@mui/material/Typography'
// import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import DinnerDiningRoundedIcon from '@mui/icons-material/DinnerDiningRounded'
import { TexasSwipeableDrawer } from '@texas/components'
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded'
import { useTranslation } from 'react-i18next'
import { Divider } from '@mui/material'

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
        sx={{ width: 200 }}
        role="presentation"
        display="flex"
        flexDirection="column"
        gap={3}
        height="100vh"
        padding={2}
      >
        <Typography sx={{ fontSize: 22, fontWeight: 'bold' }}>
          {t('hi')}, {t('guest')}
        </Typography>
        <Box display="flex" flexDirection="column">
          <Divider />
          {mainDrawerMenu.map((e, i) => (
            <React.Fragment key={i}>
              <Box
                sx={{ cursor: 'pointer', ':hover': { color: 'primary.main' } }}
                display="flex"
                alignItems="center"
                paddingTop={1}
                paddingBottom={1}
                gap={1}
                onClick={e.onClick}
              >
                <e.Icon sx={{ fontSize: 20 }} />
                <Typography>{e.name}</Typography>
              </Box>
              <Divider />
            </React.Fragment>
          ))}
          {/* <Box
            sx={{ cursor: 'pointer' }}
            display="flex"
            alignItems="center"
            gap={1}
            color="error.main"
          >
            <LogoutRoundedIcon sx={{ fontSize: 20, color: 'error.main' }} />
            <Typography>{t('signOut')}</Typography>
          </Box> */}
          <Box
            sx={{ cursor: 'pointer' }}
            display="flex"
            alignItems="center"
            gap={1}
            paddingTop={1}
            paddingBottom={1}
            color="primary.main"
          >
            <LoginRoundedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
            <Typography>{t('signIn')}</Typography>
          </Box>
          <Divider />
        </Box>
      </Box>
    </TexasSwipeableDrawer>
  )
}
