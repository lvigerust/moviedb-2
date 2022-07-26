<script>
	export let cast;
	import ActorCard from './ActorCard.svelte';
	console.log(cast[0]);
</script>

<div class="cast">
	<h2>Cast</h2>
	<div class="actors">
		<!-- {#each Array(5) as _, actor}
			<ActorCard {actor} />
		{/each} -->
		{#each Array(5) as _, index}
			<ActorCard {...cast[index]} />
		{/each}
	</div>
</div>

<!-- 

	<ActorCard
      propA={actors[index].propA}
      propB={actors[index].propB}
      propC={actors[index].propC}
   />

 -->
<style>
	h2 {
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
	}
	.actors {
		margin: 1rem 0 3rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		row-gap: 2rem;
	}
</style>
