<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${envVar}&language=en-US`
		);
		const movieDetails = await res.json();

		// console.log('Movie ID:', params.id);
		// console.log('Movie details:', movieDetails);

		if (res.ok) {
			return {
				props: {
					movieDetails,
					movieCollection: movieDetails.belongs_to_collection
				}
			};
		}
	}
</script>

<script>
	export let movieDetails;
	export let movieCollection;

	import { fly } from 'svelte/transition';
</script>

<div class="wrapper" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	{#if movieCollection != null}
		<div class="movie-details">
			<div class="img-container">
				<img
					src={'https://image.tmdb.org/t/p/original' + movieDetails.backdrop_path}
					alt={movieDetails.title}
				/>
			</div>
			<div class="txt-container">
				<h1>{movieDetails.title}</h1>
				<p class="overview">{movieDetails.overview}</p>
				<p>
					<span>Release date:</span>
					{movieDetails.release_date} <br />
					<span>Budget:</span> ${movieDetails.budget.toLocaleString('en-US')} <br />
					<span>Rating:</span>
					{movieDetails.vote_average} / 10<br />
					<span>Runtime:</span>
					{movieDetails.runtime} mins
				</p>
			</div>
		</div>
		<div class="collection">
			<a sveltekit:prefetch sveltekit:noscroll href={'/collection/' + movieCollection.id}>
				<p>Part of the <span>{movieCollection.name}</span></p>
				<img
					src={'https://image.tmdb.org/t/p/original' + movieCollection.backdrop_path}
					alt={movieCollection.name}
				/>
			</a>
		</div>
	{:else}
		<div
			class="movie-details"
			in:fly={{ y: 50, duration: 500, delay: 500 }}
			out:fly={{ duration: 500 }}
		>
			<div class="img-container">
				<img
					src={'https://image.tmdb.org/t/p/original' + movieDetails.backdrop_path}
					alt={movieDetails.title}
				/>
			</div>
			<div class="txt-container">
				<h1>{movieDetails.title}</h1>
				<p class="overview">{movieDetails.overview}</p>
				<p>
					<span>Release date:</span>
					{movieDetails.release_date} <br />
					<span>Budget:</span> ${movieDetails.budget.toLocaleString('en-US')} <br />
					<span>Rating:</span>
					{movieDetails.vote_average} / 10<br />
					<span>Runtime:</span>
					{movieDetails.runtime} mins
				</p>
			</div>
		</div>
	{/if}
</div>

<style>
	/* All of the content */
	.wrapper {
		margin: 0 15%;
	}

	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
		box-shadow: 0px 7.5px 2vh rgba(25, 25, 25, 0.5);
	}

	.txt-container {
		margin: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	span {
		font-weight: bold;
	}

	.collection a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.collection p {
		font-size: 18px;
		margin-bottom: 1rem;
	}

	.collection img {
		height: 15vh;
		object-fit: cover;

		transform: scale(1, 1);
		transition: transform 0.5s ease;
	}
	.collection img:hover {
		transform: scale(1.025, 1.025);
	}

	@media only screen and (max-width: 768px) {
		.wrapper {
			margin: 0 2.5%;
		}
	}
</style>
