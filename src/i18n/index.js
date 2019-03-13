import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import keyBy from 'lodash/keyBy';

import en from './en';
import vi from './vi';
import { getLanguage, setLanguage } from '../utils/Storage';

export const LanguageDefault = 'en';

export const LanguageSupport = [
  {
    key: 'vi',
    text: 'Tiếng Việt',
    translation: vi,
  },
  {
    key: 'en',
    text: 'English',
    translation: en,
  },
];

const resources = keyBy(LanguageSupport, 'key');

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || LanguageDefault,

  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = lang => {
  setLanguage(lang);
  i18n.changeLanguage(lang);
};

export const getCurrentLanguage = () => {
  return i18n.language || LanguageDefault;
};

export const translate = (key, options = {}) => {
  return i18n.t(key, options);
};

export default i18n;
