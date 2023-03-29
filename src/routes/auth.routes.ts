import { createRoute } from '@src/utils/createRoute'
import { RouteObject } from './types'

const layout: RouteObject['layout'] = 'AuthLayout'

export const authRoutes = {
  signIn: createRoute({
    name: 'Sign In',
    pathname: '/sign-in',
    layout,
  }),
  signUp: createRoute({
    name: 'Sign Up',
    pathname: '/sign-up',
    layout,
  }),
}
