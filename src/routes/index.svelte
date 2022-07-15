<!-- Load API query for popular movies when index page loads-->
<script context="module">
	let envVar = import.meta.env.VITE_API;

	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${envVar}&language=en-US&page=1`
		);
		const data = await res.json();

		// // The popular movies array
		// console.log('Popular movies:', data.results);

		if (res.ok) {
			return {
				props: { popularMovies: data.results }
			};
		}
	}
</script>

<script>
	// export the API data to be used in this or other components. To use in other components, access it by adding: export let DATA_NAME;
	export let popularMovies;

	// import components to be used in this page
	import PopularMovies from '../components/PopularMovies.svelte';
</script>

<div class="container">
	<section>
		<PopularMovies {popularMovies} />
	</section>
</div>
