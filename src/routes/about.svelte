<script>
	import { fly } from 'svelte/transition';
</script>

<div class="content" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="text">
		<h2>This will be the <span>about</span> page.</h2>
	</div>
</div>

<style>
	.content {
		height: 80vh;
		display: flex;
		flex-direction: column;
		gap: 5rem;
		justify-content: center;
		align-items: center;
	}

	span {
		font-weight: bold;
	}
</style>
