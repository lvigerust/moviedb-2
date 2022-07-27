<script>
	export let popularMovies;
	import MovieCard from './MovieCard.svelte';
</script>

<h1>Popular Movies</h1>

<div class="popular-movies">
	{#each popularMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h1 {
		padding: 0 0.75rem;
		margin-top: 0.6rem;
		margin-bottom: 0.2rem;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}

	@media only screen and (max-width: 768px) {
		h1 {
			font-size: 1.2rem;
			text-align: center;
		}

		.popular-movies {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
		}
	}
</style>
