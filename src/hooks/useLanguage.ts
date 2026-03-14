import { useState, useEffect, useCallback } from 'react';
import { Language, translations } from '../config/i18n';

// Simple event-based language change notification
const languageChangeEvent = 'language-change';

export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>(() => {
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

  // Force re-render when language changes
  const [, setTick] = useState(0);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
    // Notify all components about language change
    window.dispatchEvent(new CustomEvent(languageChangeEvent));
  }, [language]);

  // Listen for language changes from other components
  useEffect(() => {
    const handleLanguageChange = () => {
      setTick(t => t + 1);
    };
    window.addEventListener(languageChangeEvent, handleLanguageChange);
    return () => window.removeEventListener(languageChangeEvent, handleLanguageChange);
  }, []);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = translations[language];

  return { language, changeLanguage, t };
};