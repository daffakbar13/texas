import { createRoute } from '@src/utils/createRoute'
import { AttachMoneyRounded, ReceiptLongRounded } from '@mui/icons-material'
import { RouteObject } from './types'

const layout: RouteObject['layout'] = 'MainLayout'

export const reportsRoutes = {
  transactions: createRoute({
    name: 'Transactions',
    pathname: '/transations',
    layout,
    displayOnMenu: true,
    parent: 'Reports',
    Icon: AttachMoneyRounded,
  }),
  orders: createRoute({
    name: 'Orders',
    pathname: '/orders',
    layout,
    displayOnMenu: true,
    parent: 'Reports',
    Icon: ReceiptLongRounded,
  }),
}
