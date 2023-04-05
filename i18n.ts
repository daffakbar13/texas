import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEnglish from '@texas/languages/english/index.json'
import translationIndonesian from '@texas/languages/indonesian/index.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { translation: translationEnglish },
    id: { translation: translationIndonesian },
  },
})

export default i18n
