<script>
	// export let actor;
	export let name;
	export let avatar;
</script>

<div class="actor-card">
	<div class="avatar">
		<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
			<img src={'https://image.tmdb.org/t/p/w200' + avatar} alt="" />
		</div>
	</div>
	<h3>{name}</h3>
</div>

<style>
	.actor-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.avatar {
		margin-bottom: 10px;
		filter: drop-shadow(0px 5px 0.5vh rgba(40, 40, 40, 0.15));
	}
</style>
