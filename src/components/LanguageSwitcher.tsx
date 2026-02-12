import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { markManualLanguageSelection } from '@/i18n/geoLanguageDetector';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    markManualLanguageSelection();
    i18n.changeLanguage(languageCode);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = languageCode;
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[70px] h-9 bg-transparent border-staydia-lightgray text-white text-sm px-2">
        <div className="flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5" />
          <SelectValue placeholder={currentLanguage.code.toUpperCase()} />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-staydia-black border-staydia-lightgray">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="text-white hover:bg-staydia-darkgray focus:bg-staydia-darkgray"
          >
            <span className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;