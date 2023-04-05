import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { MainActions } from './types/actions'
import { MainStates } from './types/states'

const useMainStorage = create<MainActions & MainStates>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage(language) {
        set(() => ({ language }))
      },
    }),
    {
      name: 'main-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useMainStorage
