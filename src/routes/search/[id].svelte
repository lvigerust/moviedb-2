<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${envVar}&language=en-US&query=${params.id}&page=1&include_adult=false`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					searchedMovie: data.results
				}
			};
		}
	}
</script>

<script>
	export let searchedMovie;
	import MovieCard from '../../components/MovieCard.svelte';

	import { fly, fade } from 'svelte/transition';
	import { transitionStores } from '../../stores/transitionStores';
</script>

<svelte:head>
	<title>Search</title>
</svelte:head>

<div
	class="searched-movies"
	in:fly={{ y: $transitionStores.direction, delay: $transitionStores.duration }}
	out:fade={{ duration: $transitionStores.duration }}
>
	{#each searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 768px) {
		.searched-movies {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
		}
	}
</style>
