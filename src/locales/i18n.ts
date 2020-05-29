import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en-US.json';

const resources = {
  en: {
    translation: enTranslations
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
