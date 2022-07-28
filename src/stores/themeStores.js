import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = writable(browser && (localStorage.getItem('theme') || 'dracula'));
theme.subscribe((val) => browser && localStorage.setItem('theme', val));
