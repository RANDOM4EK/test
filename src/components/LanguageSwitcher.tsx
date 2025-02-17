import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const LanguageSwitcher = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error('LanguageSwitcher must be used within a LanguageProvider');
	}

	const { language, toggleLanguage } = context;

	return (
		<div>
			<p>Current Language: {language}</p>
			<select onChange={toggleLanguage} value={language}>
				<option value='en'>English</option>
				<option value='ru'>Russian</option>
			</select>
		</div>
	);
};

export default LanguageSwitcher;
