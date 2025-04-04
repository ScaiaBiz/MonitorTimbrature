import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const askNotificationPermission = async () => {
		console.log('permission');
		const permission = await Notification.requestPermission();
		console.log('permission', permission);
		if (permission !== 'granted') {
			alert('Permesso per le notifiche negato!');
		}
	};

	const simulatePushNotification = () => {
		setTimeout(() => {
			new Notification('Notifica simulata', {
				body: 'Questa è una notifica di test ✨',
				icon: '/MonitorTimbrature/logo.png', // o altra icona a tua scelta
				badge: '/MonitorTimbrature/logo.png',
			});
			setCount(count => count + 1);
		}, 5000); // dopo 5 secondi
	};

	const handleClick = async e => {
		e.preventDefault();
		console.log('handleClick');
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
			</div>
		</>
	);
}

export default App;
