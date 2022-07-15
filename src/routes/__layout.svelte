<script>
	import '../global.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Movie DB</title>
</svelte:head>

<main>
	<Navbar />
	<slot />
</main>
