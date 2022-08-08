import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './en/translationEN.json';
import translationES from './es/translationES.json';
import translationFR from './fr/translationFR.json';
import translationRU from './ru/translationRU.json';
import translationPT from './pt/translationPT.json';
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  },
  ru: {
    translation: translationRU
  },
  pt: {
    translation: translationPT
  }
};

export default i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ['en', 'es', 'fr', 'ru', 'pt'],
    fallbackLng: 'en',

    keySeperator: false,

    interpolation: {
      escapeValue: false
    },

    detection: {
      order: ['cookie', 'localStorage'],
      caches: ['cookie'],
    },
  });