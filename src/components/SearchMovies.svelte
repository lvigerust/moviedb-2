<script>
	function clickOutside(node) {
		const handleClick = (event) => {
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	function submitSearch() {
		goto('/search/' + searchTerm);
		searchTerm = '';
		active = false;
	}

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let active = false;
	let searchTerm = '';

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key.toLowerCase() === 'k' && e.metaKey) {
				e.preventDefault();
				active = true;
			}
		});
	});
</script>

{#if active}
	<form
		on:submit|preventDefault={submitSearch}
		class="form-control search"
		use:clickOutside
		on:outclick={() => (active = false)}
		in:fly={{ x: 25, duration: 500 }}
		out:fly={{ x: 25, duration: 250 }}
	>
		<label for="search_movie" />
		<!-- svelte-ignore a11y-autofocus -->
		<input
			bind:value={searchTerm}
			type="text"
			placeholder="Search"
			class="input input-bordered w-full max-w-xs"
			class:input-secondary={searchTerm != ''}
			autofocus
		/>
	</form>
{:else}
	<button
		class="btn btn-ghost btn-circle"
		on:click={() => (active = true)}
		in:fade={{ duration: 500, delay: 250 }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</button>
{/if}

<style>
	form {
		position: absolute;
	}
	input:focus {
		outline: none;
	}

	.btn {
		position: absolute;
	}

	@media only screen and (max-width: 630px) {
		.search .input {
			width: 62vw;
		}
	}
</style>
