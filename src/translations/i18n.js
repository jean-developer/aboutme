// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from "./en/common.json";
import common_es from "./es/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: common_en
      },
      es: {
        common: common_es
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;