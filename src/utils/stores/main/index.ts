import { create } from 'zustand'
import { MainStates } from './types/states'
import { MainActions } from './types/actions'

const useMainStore = create<MainActions & MainStates>()((set, get) => ({
  contentWidth: 480,
  isMainDrawerOpen: false,
  leftContent: 0,
  rightContent: 0,
  sideOffset: 0,
  togleMainDrawer: (open) => (event) =>
    set(() => {
      if (event) {
        const isKeydown = event.type === 'keydown'
        const isPressTab = (event as React.KeyboardEvent).key === 'Tab'
        const isPressShift = (event as React.KeyboardEvent).key === 'Shift'
        if (isKeydown && (isPressTab || isPressShift)) {
          return {}
        }
      }

      return { isMainDrawerOpen: open }
    }),
  openMainDrawer: (event) =>
    set(({ togleMainDrawer }) => {
      togleMainDrawer(true)(event)
      return {}
    }),
  closeMainDrawer: (event) =>
    set(({ togleMainDrawer }) => {
      togleMainDrawer(false)(event)
      return {}
    }),
  handleLeftRightContent: (document) => {
    const { contentWidth, sideOffset } = get()
    const { clientWidth } = document.body

    if (clientWidth > contentWidth) {
      const newSideOffset = (clientWidth - contentWidth) / 2
      const newLeftContent = newSideOffset
      const newRightContent = contentWidth - newSideOffset
      const isNotSame = newSideOffset !== sideOffset

      if (isNotSame) {
        set(() => ({
          leftContent: newLeftContent,
          rightContent: newRightContent,
          sideOffset: newSideOffset,
        }))
      }
    } else if (sideOffset !== 0) {
      set(() => ({
        leftContent: 0,
        rightContent: 0,
        sideOffset: 0,
      }))
    }
  },
}))

export default useMainStore
