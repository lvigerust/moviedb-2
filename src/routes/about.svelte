<script>
	import { fly } from 'svelte/transition';
	import { transitionStores } from '../transitionStores';

	let message = 'This will be the about page...    :)';
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

	const typing = () => (typewriter = setInterval(typeChar, 100));

	typing();
</script>

<div class="content" in:fly={{ x: $transitionStores.direction, delay: $transitionStores.duration }}>
	<div class="text">
		<h2>{typedChars}</h2>
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
</style>
