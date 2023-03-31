/* eslint-disable no-unused-vars */

type TogleEvent = React.KeyboardEvent | React.MouseEvent

export type MainActions = {
  togleMainDrawer(open: boolean): (event: TogleEvent) => void
  openMainDrawer(event: TogleEvent): void
  closeMainDrawer(event: TogleEvent): void
  handleLeftRightContent(document: Document): void
}
