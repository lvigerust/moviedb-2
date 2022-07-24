<script>
	import { fly } from 'svelte/transition';

	/* Import test component here */
</script>

<div class="positioner" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="content">
		<!-- Insert test component here -->
	</div>
</div>

<style>
	.positioner {
		height: 80vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content {
		padding: 15vh 20vw;
		background: #2d2d2d;
		box-shadow: 0 0 3em rgba(0, 0, 0, 0.25);
		border-radius: 1vh;
	}
</style>
