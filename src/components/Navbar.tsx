import { motion } from 'framer-motion';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../config/i18n';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh-CN', label: '简' },
    { code: 'zh-TW', label: '繁' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary-light dark:text-primary-dark">
          Jake Xu
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-1 border-l border-gray-300 dark:border-gray-600 pl-4">
            <Globe size={16} className="text-text-secondary-light dark:text-text-secondary-dark mr-2" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  language === lang.code
                    ? 'bg-primary-light dark:bg-primary-dark text-white'
                    : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Language Switcher Mobile */}
          <div className="flex items-center gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  language === lang.code
                    ? 'bg-primary-light dark:bg-primary-dark text-white'
                    : 'text-text-secondary-light dark:text-text-secondary-dark'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;