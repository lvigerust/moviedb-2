<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	import { blur, fade, fly } from 'svelte/transition';
	import { transitionStores } from '../stores/transitionStores';

	export let error, status;
</script>

<div out:fade>
	<div class="background">
		<img src="/404-bg.jpg" alt="" in:blur={{ delay: $transitionStores.duration }} />
		<div class="content">
			<h2 in:fly={{ x: 500, delay: $transitionStores.duration1 }}>{status}</h2>
			<p in:fly={{ x: -500, delay: $transitionStores.duration2 }}>
				error: {error.message}
			</p>
			<a href="/" in:fade={{ duration: 750, delay: $transitionStores.duration2 + 1000 }}
				>Hello, is it me you're looking for?</a
			>
		</div>
	</div>
</div>

<style>
	img {
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		position: absolute;
		object-fit: cover;
		object-position: top;
		z-index: -10;
	}
	.background {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
	.content {
		text-align: center;
		margin: 0 2rem;
		filter: drop-shadow(0px 5px 1vh rgba(40, 40, 40, 0.15));
	}
	h2 {
		line-height: 1;
		font-size: 8rem;
		font-weight: 500;
	}

	p {
		font-size: 14px;
		opacity: 60%;

		margin-bottom: 2rem;
	}
	a {
		font-family: 'Lora', serif;
		font-style: italic;

		font-weight: 600;
		font-size: 2rem;
		text-decoration: none;
	}

	@media only screen and (max-width: 500px) {
		a {
			font-size: 1.5rem;
		}
	}
</style>
