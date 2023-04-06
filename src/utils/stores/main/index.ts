import { create } from 'zustand'
import { MainStates } from './types/states'
import { MainActions } from './types/actions'

const useMainStore = create<MainActions & MainStates>()((set, get) => ({
  contentWidth: 0,
  maxContentWidth: 480,
  isMainDrawerOpen: false,
  isLanguageDrawerOpen: false,
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
  openMainDrawer(event) {
    set(({ togleMainDrawer }) => {
      togleMainDrawer(true)(event)
      return {}
    })
  },
  closeMainDrawer(event) {
    set(({ togleMainDrawer }) => {
      togleMainDrawer(false)(event)
      return {}
    })
  },
  handleLeftRightContent() {
    const { contentWidth, maxContentWidth, sideOffset } = get()
    const { clientWidth } = document.body

    if (clientWidth > maxContentWidth) {
      const newSideOffset = (clientWidth - maxContentWidth) / 2
      const newLeftContent = newSideOffset
      const newRightContent = maxContentWidth - newSideOffset
      const isNotSame = newSideOffset !== sideOffset

      if (isNotSame) {
        set(() => ({
          contentWidth: maxContentWidth,
          leftContent: newLeftContent,
          rightContent: newRightContent,
          sideOffset: newSideOffset,
        }))
      }
    } else {
      if (contentWidth !== clientWidth) {
        set({ contentWidth: clientWidth })
      }
      if (sideOffset !== 0) {
        set(() => ({ leftContent: 0, rightContent: 0, sideOffset: 0 }))
      }
    }
  },
  openLanguageDrawer() {
    set(() => ({ isLanguageDrawerOpen: true }))
  },
  closeLanguageDrawer() {
    set(() => ({ isLanguageDrawerOpen: false }))
  },
}))

export default useMainStore
