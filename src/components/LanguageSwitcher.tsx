import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'rw', name: 'Kinyarwanda' }
];

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
        className={`lang-btn ${
          isScrolled
            ? "border-[#002e6d]/15 bg-white text-[#002e6d] hover:bg-[#002e6d]/5"
            : "border-white/25 bg-white/10 text-white hover:bg-white/15"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>
          {languages.find(lang => lang.code === i18n.language)?.code.toUpperCase() || "EN"}
        </span>
      </button>

      {isOpen && (
        <div className="lang-menu absolute right-0 top-full z-50 mt-2 min-w-[148px] rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleLanguageChange(language.code)}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${
                i18n.language === language.code
                  ? "bg-gray-50 font-medium text-[#002e6d]"
                  : "text-gray-700"
              }`}
            >
              {language.name}
              {i18n.language === language.code && (
                <span className="text-[#002e6d] text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;