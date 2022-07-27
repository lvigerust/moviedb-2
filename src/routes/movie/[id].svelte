<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch, params }) {
		const [movieDetailsRes, movieCreditsRes] = await Promise.all([
			fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${envVar}&language=en-US`),

			fetch(
				`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${envVar}&language=en-US`
			)
		]);

		const movieDetails = await movieDetailsRes.json();
		const movieCredits = await movieCreditsRes.json();

		if (movieDetailsRes.ok && movieCreditsRes.ok) {
			return {
				props: {
					movieDetails,
					movieCollection: movieDetails.belongs_to_collection,
					cast: movieCredits.cast
				}
			};
		}
	}
</script>

<script>
	export let movieDetails, movieCollection, cast;
	import MovieActors from '../../components/MovieActors.svelte';
	import { fly, fade } from 'svelte/transition';
	import { transitionStores } from '../../transitionStores';

	const date = new Date(movieDetails.release_date);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let day = date.getDate();
	let month = months[date.getMonth()];
	let year = date.getFullYear();

	$: formattedDate = `${month} ${day}, ${year}`;

	function Runtime(minutes) {
		let h = Math.floor(minutes / 60);
		let m = minutes % 60;
		return (h + 'h ' + m + 'm').toString();
	}
</script>

<div
	class="wrapper"
	in:fly={{ y: -$transitionStores.direction, delay: $transitionStores.duration }}
	out:fade={{ duration: $transitionStores.duration }}
>
	<div class="movie-details">
		<div class="img-container">
			<img
				src={'https://image.tmdb.org/t/p/w1280/' + movieDetails.backdrop_path}
				alt={movieDetails.title}
			/>
		</div>
		<div class="txt-container">
			<h1>{movieDetails.title}</h1>
			<p class="overview">{movieDetails.overview}</p>
			<p>
				<span>Release date:</span>
				{formattedDate} <br />
				<span>Budget:</span> ${movieDetails.budget.toLocaleString('en-US')} <br />
				<span>Rating:</span>
				{Math.round(movieDetails.vote_average * 10) / 10} / 10<br />
				<span>Runtime:</span>
				{Runtime(movieDetails.runtime)}
			</p>
		</div>
	</div>

	<div
		class="movie-cast"
		in:fly={{ x: $transitionStores.direction, delay: $transitionStores.duration1 }}
	>
		<MovieActors {cast} />
	</div>

	{#if movieCollection != null}
		<div
			class="movie-collection"
			in:fly={{ x: -$transitionStores.direction, delay: $transitionStores.duration2 }}
		>
			<a sveltekit:prefetch sveltekit:noscroll href={'/collection/' + movieCollection.id}>
				<p>Part of the <span>{movieCollection.name}</span></p>
				<img
					src={'https://image.tmdb.org/t/p/w1280/' + movieCollection.backdrop_path}
					alt={movieCollection.name}
				/>
			</a>
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

	.movie-collection a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.movie-collection p {
		font-size: 18px;
		margin-bottom: 1rem;
	}

	.movie-collection img {
		height: 15vh;
		object-fit: cover;

		transform: scale(1, 1);
		transition: transform 0.5s ease;
	}
	.movie-collection img:hover {
		transform: scale(1.025, 1.025);
	}

	@media only screen and (max-width: 768px) {
		.wrapper {
			margin: 0 2.5%;
			text-align: center;
		}
	}
</style>
