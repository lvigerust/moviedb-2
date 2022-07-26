<script>
	let previousY = 0;
	let currentY = 0;
	let clientHeight = 0;

	const deriveDirection = (y) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		previousY = y;
		return direction;
	};

	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;
</script>

<svelte:window bind:scrollY={currentY} />

<div
	class="navbar bg-base-100/75 sticky top-0 z-50 backdrop-blur-sm transition-transform ease-in "
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
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
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl ">Movie Database</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
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
	</div>
</div>
