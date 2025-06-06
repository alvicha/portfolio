import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
      fr: { translation: translationFR },
    },
    lng: 'es',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;