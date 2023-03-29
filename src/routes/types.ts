import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded'

const MenuGroups = ['Overviews', 'Banquets', 'Employees', 'Reports', 'Others'] as const

type MenuGroupsType = (typeof MenuGroups)[number]
type LayoutType = 'MainLayout' | 'AuthLayout'
export interface RouteObject {
  readonly name: string
  readonly pathname: string
  readonly layout: LayoutType
  readonly parent?: MenuGroupsType
  readonly displayOnMenu?: boolean
  readonly Icon?: typeof PieChartRoundedIcon
}
