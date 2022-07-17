<script>
	import { fly } from 'svelte/transition';
</script>

<div class="content" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="text">
		<h2>This page is to test new features.</h2>
	</div>

	<div class="features">
		<div class="badge badge-warning gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-4 h-4 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
			under development
		</div>

		<div class="text-sm breadcrumbs">
			<ul>
				<li><a href="/">Home</a></li>
				<li>Feature Testing</li>
			</ul>
		</div>

		<a href="/feature_search">
			<div class="search">
				<div class="form-control">
					<input type="text" placeholder="Search movie" class="input input-bordered " />
				</div>
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
		</a>

		<label class="swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" />

			<!-- sun icon -->
			<svg
				class="swap-on fill-current w-10 h-10"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path
					d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
				/></svg
			>

			<!-- moon icon -->
			<svg
				class="swap-off fill-current w-10 h-10"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path
					d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
				/></svg
			>
		</label>
	</div>

	<footer class="footer p-10 bg-neutral">
		<div>
			<span class="footer-title">Services</span>
			<p class="link link-hover">Branding</p>
			<p class="link link-hover">Design</p>
			<p class="link link-hover">Marketing</p>
			<p class="link link-hover">Advertisement</p>
		</div>

		<div>
			<span class="footer-title">Boring stuff</span>
			<p class="link link-hover">Terms of use</p>
			<p class="link link-hover">Privacy policy</p>
			<p class="link link-hover">Cookie policy</p>
		</div>
	</footer>
</div>

<style>
	.content {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		gap: 5rem;
		justify-content: center;
		align-items: center;
	}

	.features {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	.search {
		display: flex;
	}
</style>
