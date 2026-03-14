import { createContext, useContext, ReactNode } from 'react';
import { Language, translations } from '../config/i18n';
import { useState, useEffect, useCallback } from 'react';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'zh-CN' || saved === 'zh-TW')) {
      return saved as Language;
    }
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh')) {
      if (browserLang.includes('TW') || browserLang.includes('HK')) {
        return 'zh-TW';
      }
      return 'zh-CN';
    }
    return 'en';
  });

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};