<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch, params }) {
		// Params is the ID of the collection
		console.log('Collection ID:', params.id);

		const res = await fetch(
			`https://api.themoviedb.org/3/collection/${params.id}?api_key=${envVar}&language=en-US`
		);
		const collectionDetails = await res.json();

		// console.log('Collection details: ', collectionDetails);

		if (res.ok) {
			return {
				props: { collectionDetails }
			};
		}
	}
</script>

<script>
	export let collectionDetails;
	import MovieCard from '../../components/MovieCard.svelte';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="collection-details">
		<h2>{collectionDetails.name}</h2>
		<p>{collectionDetails.overview}</p>
	</div>

	<div class="collection-movies">
		{#each collectionDetails.parts as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>

<style>
	h2 {
		font-size: 2em;
		font-weight: bold;
	}
	.collection-details {
		text-align: center;
	}

	.collection-details p {
		margin: 2rem auto;
		max-width: 1200px;
	}

	.collection-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
