// public/service-worker.js
const baseUrl = '/MonitorTimbrature';

self.addEventListener('push', event => {
	const payload = event.data ? event.data.text() : 'No Payload';
	const options = {
		body: payload,
		icon: `${baseUrl}/logo.png`,
		badge: `/vite.svg`,
	};

	event.waitUntil(self.registration.showNotification('Web Push', options));
});
