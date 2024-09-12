import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppCookiesProvider } from './utils';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<AppCookiesProvider>
			<App />
		</AppCookiesProvider>
	</BrowserRouter>
);
