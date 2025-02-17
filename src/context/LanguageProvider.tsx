import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

interface LanguageProviderProps {
	children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState<'en' | 'ru'>('en');

	const toggleLanguage = () => {
		setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ru' : 'en'));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageProvider;
