import { useState } from 'react';
import LanguageContextTest from './LanguageContextTest';

interface LanguageProviderProps {
    children: React.ReactNode;
}

const LanguageProviderTest:React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<'en' | 'ru'>('en')

    const toggleLanguage = () => {
		setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ru' : 'en'));
	};
  return (
    <div>
        <LanguageContextTest.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContextTest.Provider>
    </div>
  )
}


export default LanguageProviderTest
