import React, { useState } from 'react';

import { LanguageSupport, changeLanguage, getCurrentLanguage } from '../i18n';

const Language = () => {
  const [currentLang, setLanguage] = useState(getCurrentLanguage());

  return (
    <select
      value={currentLang}
      onChange={event => {
        const langSelected = event.target.value;
        setLanguage(langSelected);
        changeLanguage(langSelected);
      }}
    >
      {LanguageSupport.map(lang => (
        <option value={lang.key} key={lang.key}>{lang.text}</option>
      ))}
    </select>
  );
};

export default Language;
