import { createRoute } from '@src/utils/createRoute'
import {
  RestaurantMenuRounded,
  FormatListBulletedRounded,
  LocalOfferRounded,
} from '@mui/icons-material'
import { RouteObject } from './types'

const layout: RouteObject['layout'] = 'MainLayout'

export const banquetsRoutes = {
  servings: createRoute({
    name: 'Servings',
    pathname: '/servings',
    layout,
    displayOnMenu: true,
    parent: 'Banquets',
    Icon: RestaurantMenuRounded,
  }),
  variants: createRoute({
    name: 'Variants',
    pathname: '/variants',
    layout,
    displayOnMenu: true,
    parent: 'Banquets',
    Icon: FormatListBulletedRounded,
  }),
  promotions: createRoute({
    name: 'Promotions',
    pathname: '/promotions',
    layout,
    displayOnMenu: true,
    parent: 'Banquets',
    Icon: LocalOfferRounded,
  }),
}
