<script>
	export let movie;

	const released = movie.release_date.split('-');
	const year = released[0];
</script>

<div class="movie-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/movie/' + movie.id}>
		<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
		<div class="description">
			<h2>{movie.title}</h2>
			<p>{year}</p>
		</div>
	</a>
</div>

<style>
	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 0.75rem;
		margin-bottom: 0.75rem;

		/* Effects */
		box-shadow: 0px 7.5px 2vh rgba(70, 70, 70, 0.5);
		transform: scale(1, 1);
		transition: transform 0.5s ease;
	}
	img:hover {
		transform: scale(1.075, 1.075);
	}

	h2 {
		font-size: 1.1rem;
		font-weight: bold;
	}

	.description {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		height: 5vh;
		font-size: 0.9rem;
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0.75rem;
	}
</style>
