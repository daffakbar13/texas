import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid'
import { MainActions } from './types/actions'
import { MainStates } from './types/states'

const useMainStorage = create<MainActions & MainStates>()(
  persist(
    (set) => ({
      deviceId: uuidv4(),
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
