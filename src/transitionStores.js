import { writable } from 'svelte/store';

export const transitionStores = writable({
	direction: 250,

	duration: 350,
	duration1: 350 + 150,
	duration2: 350 + 150 + 150
});
