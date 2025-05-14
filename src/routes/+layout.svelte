<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	let { data, children } = $props();
</script>

<svelte:head>
	<title>Tahmid Choudhury</title>
	<meta name="description" content="Developer | Designer | Dreamer. Portfolio of Tahmid Choudhury, student at National University.">

	<!-- Open Graph -->
	<meta property="og:title" content="Tahmid Choudhury">
	<meta property="og:description" content="Portfolio of Tahmid Choudhury - Developer, Designer, Dreamer.">
	<meta property="og:image" content="https://tahmidchoudhury.vercel.app/favicon.png">
	<meta property="og:url" content="https://tahmidchoudhury.vercel.app">
	<meta name="twitter:card" content="summary_large_image">

	<!-- Favicon -->
	<link rel="icon" href="/favicon.png" />
</svelte:head>

{@render children()}
<Footer lastUpdated={data.lastUpdated} />
