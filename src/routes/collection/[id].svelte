<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/collection/${params.id}?api_key=${envVar}&language=en-US`
		);
		const collectionDetails = await res.json();

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
	import { transitionStores } from '../../transitionStores';
</script>

<div
	in:fly={{ x: $transitionStores.direction, delay: $transitionStores.duration }}
	out:fly={{ y: $transitionStores.direction, duration: $transitionStores.duration }}
>
	<div class="collection-details">
		<h2>{collectionDetails.name}</h2>
		<p>
			{collectionDetails.overview}
		</p>
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
		margin: -1rem 0 2rem;
	}
	.collection-details {
		text-align: center;
		margin: 2rem 15%;
		max-width: 1152px;
	}

	.collection-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}

	@media only screen and (max-width: 768px) {
		.collection-details {
			margin: 2rem 5%;
		}
	}
</style>
