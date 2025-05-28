<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Stars from '$lib/components/ui/TextLayouts/particles/Stars.svelte';
	let { data, children } = $props();
</script>

<div class="fixed inset-0 -z-10 pointer-events-none">
	<Stars  />
</div>

{@render children()}
<Footer lastUpdated={data.lastUpdated} />
