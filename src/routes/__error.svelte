<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error, status;

	let message = "Hello, is it me you're looking for?";
	let typedChars = '';
	let index = 0;
	let typewriter;

	const typeChar = () => {
		if (index < message.length) {
			typedChars += message[index];
			index += 1;
		} else {
			// stop typing
			clearInterval(typewriter);
		}
	};

	const typing = () => (typewriter = setInterval(typeChar, 50));

	typing();
</script>

<img src="/404-bg.jpg" alt="" />
<div class="background">
	<div class="content">
		<h2>{status}</h2>
		<p>error: {error.message}</p>
		<a href="/">{typedChars}</a>
	</div>
</div>

<style>
	img {
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		position: absolute;
		object-fit: cover;
		object-position: top;
		z-index: -10;
	}
	.background {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
	.content {
		text-align: center;
		margin: 0 2rem;
	}
	h2 {
		line-height: 1;
		font-size: 8rem;
		font-weight: 500;
	}

	p {
		font-size: 14px;
		opacity: 60%;

		margin-bottom: 2rem;
	}
	a {
		font-family: 'Lora', serif;
		font-style: italic;

		font-weight: 600;
		font-size: 2rem;
		text-decoration: none;
	}

	@media only screen and (max-width: 500px) {
		a {
			font-size: 1.5rem;
		}
	}
</style>
