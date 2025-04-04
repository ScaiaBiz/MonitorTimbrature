import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [errorText, setErrorText] = useState('');

	const askNotificationPermission = async () => {
		const permission = await Notification.requestPermission();
		setErrorText(`permission: ${permission}`);
		if (permission !== 'granted') {
			alert('Permesso per le notifiche negato!');
		}
	};

	const simulatePushNotification = () => {
		setErrorText('Creo la notifica');
		setTimeout(() => {
			new Notification('Notifica simulata', {
				body: 'Questa è una notifica di test ✨',
				icon: '/MonitorTimbrature/logo.png', // o altra icona a tua scelta
				badge: '/MonitorTimbrature/logo.png',
			});
			setCount(count => count + 1);
			setErrorText(``);
		}, 5000); // dopo 5 secondi
	};

	const handleClick = async e => {
		e.preventDefault();
		setErrorText('avvio richiesta permesso notifiche');
		await askNotificationPermission();
		simulatePushNotification();
	};

	return (
		<>
			<div></div>
			<button onClick={handleClick}>Simula Notifica</button>
			<div className='card'>
				<p>Clicca su simula notifica</p>
				<p>Notifiche inviate: {count}</p>
				<p>{errorText}</p>
			</div>
		</>
	);
}

export default App;
