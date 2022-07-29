<script>
	import { supabase } from '$lib/supabaseClient';
	import { fly, fade } from 'svelte/transition';

	let loading = false;
	let email;

	let message = false;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			message = true;
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<svelte:head>
	<title>Login / Signup</title>
</svelte:head>

{#if message}
	<div
		class="alert alert-info shadow-lg w-fit md:px-24 absolute top-8 mx-auto inset-x-0 z-50"
		in:fly={{ y: -50, delay: 250, duration: 500 }}
	>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current flex-shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Magic Link has been sent to {email}!</span>
		</div>
	</div>
{/if}

<form on:submit|preventDefault={handleLogin} in:fly={{ x: 500, delay: 500 }} out:fly={{ x: -500 }}>
	<div class="hero min-h-[80vh] bg-base">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<div class="text-center lg:text-left lg:ml-8">
				<h1 class="text-5xl font-bold">Login now!</h1>
				<p class="py-6">
					Login to Stinkmeaner's database to share all data about your personal life. Trust me, all
					the data is totally safe and would never end up in the wrong place or be exploited.
				</p>
			</div>
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<div class="card-body">
					<div class="form-control">
						<label class="label" for="email">
							<span class="label-text">Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							class="input input-bordered"
							bind:value={email}
						/>
					</div>

					<div class="form-control mt-6">
						<input
							type="submit"
							class="btn btn-primary"
							value={loading ? 'Loading' : 'Receive Magic Link'}
							disabled={loading}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
