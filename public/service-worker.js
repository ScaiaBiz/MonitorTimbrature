// public/service-worker.js

self.addEventListener('push', event => {
	const baseUrl = '/MonitorTimbrature';
	const payload = event.data ? event.data.text() : 'No Payload';
	const options = {
		body: payload,
		icon: `${baseUrl}/logo.png`,
		badge: `${baseUrl}/logo.png`,
	};

	event.waitUntil(self.registration.showNotification('Web Push', options));
});
