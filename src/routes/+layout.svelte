<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Stars from '$lib/components/ui/TextLayouts/particles/Stars.svelte';
	let { data, children } = $props();
</script>

<svelte:head>
	<title>Tahmid Choudhury | Portfolio</title>
	<meta name="Portfolio" content="Developer | Designer | Dreamer. Portfolio of Tahmid Choudhury, student at National University.">

	<!-- Open Graph -->
	<meta property="og:title" content="Tahmid Choudhury">
	<meta property="og:description" content="Portfolio of Tahmid Choudhury - Developer, Designer, Dreamer.">
	<meta property="og:image" content="https://tahmidchoudhury.vercel.app/favicon.ico">
	<meta property="og:url" content="https://tahmidchoudhury.vercel.app">
	<meta name="twitter:card" content="summary_large_image">

	<!-- Favicon -->
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="fixed inset-0 -z-10 pointer-events-none">
	<Stars  />
</div>

{@render children()}
<Footer lastUpdated={data.lastUpdated} />
