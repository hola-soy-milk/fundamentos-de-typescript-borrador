/*
 * 👇 Punto de partida de nuestra aplicación Svelte
 */

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;