import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

navigator.serviceWorker
	.register('/MonitorTimbrature/service-worker.js')
	.then(() => console.log('Service Worker registrato'))
	.catch(err => console.error('Errore registrazione SW:', err));

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
