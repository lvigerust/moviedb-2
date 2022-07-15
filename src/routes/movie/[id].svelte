<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${envVar}&language=en-US`
		);
		const movieDetails = await res.json();

		console.log('Movie ID:', params.id);
		console.log('Movie details:', movieDetails);

		if (res.ok) {
			return {
				props: {
					movieDetails
				}
			};
		}
	}
</script>

<script>
	export let movieDetails;
</script>

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
