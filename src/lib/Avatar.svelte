<script>
	import { createEventDispatcher } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	export let path;
	export let size = '10em';

	let uploading = false;
	let src;
	let files;

	const dispatch = createEventDispatcher();

	async function downloadImage() {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path);
			if (error) throw error;

			src = URL.createObjectURL(data);
		} catch (error) {
			console.error('Error downloading image: ', error.message);
		}
	}

	async function uploadAvatar() {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

			if (uploadError) throw uploadError;

			path = filePath;
			dispatch('upload');
		} catch (error) {
			alert(error.message);
		} finally {
			uploading = false;
		}
	}
</script>

<div class="flex flex-col items-center gap-1 text-center">
	{#if path}
		<div class="avatar">
			<div class="w-32 rounded-xl">
				<img
					use:downloadImage
					{src}
					alt="Avatar"
					class="avatar image"
					style="height: {size}; width: {size};"
				/>
			</div>
		</div>
	{:else}
		<div class="avatar placeholder">
			<div class="bg-neutral-focus text-neutral-content rounded-xl w-24">
				<span class="text-2xl">G</span>
			</div>
		</div>

		<div class="avatar no-image" style="height: {size}; width: {size};" />
		<div style="width: {size};">
			<label class="btn btn-accent btn-xs" for="single">
				{uploading ? 'Uploading ...' : 'Upload'}
			</label>
			<input
				style="visibility: hidden; position:absolute;"
				type="file"
				id="single"
				accept="image/*"
				bind:files
				on:change={uploadAvatar}
				disabled={uploading}
			/>
		</div>
	{/if}
</div>
