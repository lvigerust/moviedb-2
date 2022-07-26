<script>
	export let cast;
	import ActorCard from './ActorCard.svelte';
	// console.log(cast[0]);
</script>

<div class="cast">
	<h2>Cast</h2>
	<div class="actors">
		{#each cast.slice(0, 5) as actor}
			<ActorCard {actor} />
		{/each}
	</div>
</div>

<style>
	h2 {
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
	}
	.actors {
		margin: 1rem 0 3rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
		grid-row-gap: 1.2rem;
	}
</style>
