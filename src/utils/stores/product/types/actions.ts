/* eslint-disable no-unused-vars */
import { NextRouter } from 'next/router'

type TogleEvent = React.KeyboardEvent | React.MouseEvent

export type ProductActions = {
  changeSearchKeyword(value: string, router: NextRouter): void
  changeViewMode(viewMode: 'list' | 'search', router: NextRouter): void
  filterServing(value: string): void
}
