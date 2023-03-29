import { authRoutes } from './auth.routes'
import { banquetsRoutes } from './banquets.routes'
import { employeesRoutes } from './employees.routes'
import { othersRoutes } from './others.routes'
import { overviewsRoutes } from './overviews.routes'
import { reportsRoutes } from './reports.routes'

export const routes = {
  ...authRoutes,
  ...overviewsRoutes,
  ...banquetsRoutes,
  ...employeesRoutes,
  ...reportsRoutes,
  ...othersRoutes,
}

export type RoutesType = keyof typeof routes
