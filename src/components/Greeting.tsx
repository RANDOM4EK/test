import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Greeting: React.FC = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error('Greeting must be used within a LanguageProvider');
	}

	const { language } = context;

	return <div>{language === 'en' ? 'Hello' : 'Привет'}</div>;
};

export default Greeting;
