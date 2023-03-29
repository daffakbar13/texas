import { createRoute } from '@src/utils/createRoute'
import { SettingsRounded, ExitToAppRounded } from '@mui/icons-material'
import { RouteObject } from './types'

const layout: RouteObject['layout'] = 'MainLayout'

export const othersRoutes = {
  settings: createRoute({
    name: 'Settings',
    pathname: '/settings',
    layout,
    displayOnMenu: true,
    parent: 'Others',
    Icon: SettingsRounded,
  }),
  signOut: createRoute({
    name: 'Sign Out',
    pathname: '/sign-out',
    layout,
    displayOnMenu: true,
    parent: 'Others',
    Icon: ExitToAppRounded,
  }),
  notFound: createRoute({
    name: 'Page Not Found',
    pathname: '/not-found-404',
    layout,
  }),
}
