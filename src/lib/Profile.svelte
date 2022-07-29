<script>
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/sessionStore';
	import { fade, fly } from 'svelte/transition';
	import { transitionStores } from '../stores/transitionStores';

	let loading = true;
	let username = null;
	let website = null;
	let avatar_url = null;

	async function getProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatar_url = data.avatar_url;
			}
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function updateProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});

			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			// alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<form
	use:getProfile
	on:submit|preventDefault={updateProfile}
	in:fade={{ delay: $transitionStores.duration }}
>
	<div class="hero min-h-[80vh] bg-base">
		<div class="hero-content flex-col">
			<div class="flex flex-col items-center text-center justify-center">
				<h1 class="text-5xl font-bold mb-3">Hello, {username || $user.email}!</h1>

				<p class="max-w-2xl text-center mb-6">
					You just ordered a thousand litres of milk. Unfortunately, there is no refund policy, but
					you are free to resell it if you manage.
				</p>

				<div class="form-control w-full max-w-xs">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>

					<input
						class="input input-bordered w-full max-w-xs"
						id="email"
						type="email"
						bind:value={$user.email}
						disabled
					/>
				</div>

				<div class="form-control w-full max-w-xs">
					<label class="label" for="email">
						<span class="label-text">Username</span>
					</label>

					<input
						class="input input-bordered w-full max-w-xs"
						id="username"
						type="username"
						bind:value={username}
					/>
				</div>

				<div class="form-control w-full max-w-xs">
					<label class="label" for="website">
						<span class="label-text">Website</span>
					</label>

					<input
						class="input input-bordered w-full max-w-xs"
						id="website"
						type="website"
						bind:value={website}
					/>
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<button class="btn btn-primary w-52 mt-6">
					<input
						type="submit"
						class="cursor-pointer"
						value={loading ? 'LOADING ...' : 'UPDATE'}
						disabled={loading}
					/>
				</button>
				<button class="btn btn-secondary w-52" on:click={signOut} disabled={loading}>
					Sign Out
				</button>
			</div>
		</div>
	</div>
</form>
