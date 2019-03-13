// import i18n from 'i18n-js';
// import { getLocale, setLocale } from '../utils/Storage';

// import en from './en';
// import vi from './vi';

// export const LanguageDefault = 'en';

// export const LanguageSupport = [
//   {
//     key: 'vi',
//     text: 'Tiếng Việt',
//     data: vi,
//   },
//   {
//     key: 'en',
//     text: 'English',
//     data: en,
//   },
// ];

// export const translate = (key, params = {}) => {
//   return i18n.t(key, params);
// };

// export const changeLanguage = lang => {
//   setLocale(lang);
//   i18n.locale = lang;
// };

// export const getCurrentLocale = () => {
//   return i18n.locale;
// };

// const configLocale = () => {
//   LanguageSupport.forEach(lang => {
//     i18n.translations[lang.key] = lang.data;
//   });

//   let locale = getLocale();
//   if (!locale) {
//     locale = LanguageDefault;
//     setLocale(locale);
//   }
//   i18n.locale = locale;
// };

// configLocale();

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
