import { useState, useEffect } from 'react';
import { Language, translations } from '../config/i18n';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'zh-CN' || saved === 'zh-TW')) {
      return saved as Language;
    }
    // Detect browser language
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh')) {
      if (browserLang.includes('TW') || browserLang.includes('HK')) {
        return 'zh-TW';
      }
      return 'zh-CN';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return { language, changeLanguage, t };
};