<script>
	export let cast;
</script>

<h1>Actors</h1>
<div class="actors">
	{#each Array(5) as _, actor}
		<h3>{cast[actor].name}</h3>
		<img src={'https://image.tmdb.org/t/p/w200' + cast[actor].profile_path} alt={actor.name} />
	{/each}
</div>
