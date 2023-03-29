import { createRoute } from '@src/utils/createRoute'
import { PointOfSaleRounded } from '@mui/icons-material'
import { RouteObject } from './types'

const layout: RouteObject['layout'] = 'MainLayout'

export const employeesRoutes = {
  cashiers: createRoute({
    name: 'Cashiers',
    pathname: '/cashiers',
    layout,
    displayOnMenu: true,
    parent: 'Employees',
    Icon: PointOfSaleRounded,
  }),
}
