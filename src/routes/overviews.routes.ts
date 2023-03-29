import { createRoute } from '@src/utils/createRoute'
import { PieChartRounded } from '@mui/icons-material'
import { RouteObject } from './types'

const layout: RouteObject['layout'] = 'MainLayout'

export const overviewsRoutes = {
  dashboards: createRoute({
    name: 'Dashboards',
    pathname: '/dashboards',
    layout,
    displayOnMenu: true,
    parent: 'Overviews',
    Icon: PieChartRounded,
  }),
}
