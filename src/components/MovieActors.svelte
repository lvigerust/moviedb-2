<script>
	export let cast;
	import ActorCard from './ActorCard.svelte';
	console.log(cast[0]);
</script>

<h1>Cast</h1>
<div class="actors">
	{#each cast as actor}
		<ActorCard {actor} />
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		margin-bottom: 1rem;
	}
	.actors {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 1rem;
	}
</style>
