<script>
	import '../global.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<title>Movie Database</title>
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
