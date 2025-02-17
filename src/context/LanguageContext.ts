import { createContext } from 'react';

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default LanguageContext;
