<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${envVar}&language=en-US&page=1`
		);
		const data = await res.json();

		if (res.ok) {
			return {
				props: { popularMovies: data.results }
			};
		}
	}
</script>

<script>
	export let popularMovies;
	import PopularMovies from '../components/PopularMovies.svelte';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 400 }}>
	<PopularMovies {popularMovies} />
</section>
