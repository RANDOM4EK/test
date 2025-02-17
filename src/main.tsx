import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LanguageProviderTest from './test/contextTest/LanguageProviderTest.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LanguageProviderTest>
			<App />
		</LanguageProviderTest>
	</StrictMode>
);
