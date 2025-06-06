<script lang="ts">
	import { seo } from '$lib/index.js';
	import About from '$lib/components/About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Por from '$lib/components/Por.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Stars from '$lib/components/ui/TextLayouts/particles/Stars.svelte';
</script>


<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={seo.title} />
	<meta property="og:url" content={seo.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:site" content="@tahmid019" />

	<meta name="p:domain_verify" content="f642f6e3ea070b227c4b4de5d7ea890a"/>
</svelte:head>

<main class="bg-transparent">
	<!-- <BgGrad />  -->

	<!-- Hero section -->
	<Hero />

	<!-- About -->
	<About />

	<!-- Projects -->
	<Projects />

	<!-- Experience -->

	<!-- Position of Responsibility -->
	<Por />

	<!-- Coding journey -->

	<!-- Tech Stack -->
	<Skills />

	<!-- Contact -->
	 <!-- <Stars /> -->
</main>
