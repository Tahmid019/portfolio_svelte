<script lang="ts">
	// import AuroraText from "../ui/TextLayouts/AuroraText.svelte";

	export let Interest: string;
	export let Description: string;
</script>

<div class="container h-full w-full text-white">
	<div class="interest-container">
		<h1 class="text-4xl font-bold tracking-tighter md:text-3xl lg:text-4xl xl:text-5xl">
			{Interest}
		</h1>
	</div>
	<div class="interest-description">
		<p>{Description}</p>
	</div>
</div>
