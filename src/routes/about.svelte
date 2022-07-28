<script>
	import { fly, fade, slide } from 'svelte/transition';
	import { transitionStores } from '../transitionStores';

	let message = 'This will be the about page.';
	let typedChars = '';
	let index = 0;
	let typewriter;

	const typeChar = () => {
		if (index < message.length) {
			typedChars += message[index];
			index += 1;
		} else {
			// stop typing
			clearInterval(typewriter);
		}
	};

	const typing = () => (typewriter = setInterval(typeChar, 90));

	typing();
</script>

<div
	class="content"
	in:fly={{ y: -$transitionStores.direction, delay: $transitionStores.duration }}
	out:fade={{ duration: $transitionStores.duration }}
>
	<div class="text">
		<h2>{typedChars}</h2>
	</div>

	<a href="/error" in:slide={{ delay: 2500, duration: $transitionStores.duration }}>
		<button class="btn  btn-error">See Error page</button>
	</a>
</div>

<style>
	.content {
		height: 80vh;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		justify-content: center;
		align-items: center;
	}
</style>
