<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import BentoGrid from './ui/BentoGrid.svelte';
	import BentoGridItem from './ui/BentoGridItem.svelte';

	import items from '$lib/data/projects.js';
	import Subhead from './ui/TextLayouts/Subhead.svelte';
	import BlurFade from './ui/BlurFade.svelte';
</script>

<section class="Por-container p-4 md:p-14 lg:p-20 xl:mx-[13%]">
	<!-- Heading -->
	<header
		use:reveal
		class="flex w-auto items-center justify-center font-semibold text-white backdrop-blur-sm"
	>
		<Subhead text={'Projects'} />
	</header>

	<!-- Projs -->
	<BlurFade>
		<BentoGrid class="mx-auto max-w-4xl px-10 md:px-0">
			{#each items as item, i}
				<BentoGridItem
					title={item.title}
					description={item.description}
					class={i === 3 || i === 6 ? 'md:col-span-2' : ''}
				>
					<div slot="header">
						<!-- <svelte:component this={item.header} /> -->
						<img
							src={item.headerImage}
							alt={item.title}
							class="h-32 w-full rounded-lg object-cover grayscale transition-all duration-200 hover:scale-105 hover:grayscale-0"
						/>
					</div>
					<div slot="icon">
						<img src={item.icon} alt="svg_icons" class="h-4 w-4 text-neutral-500" />
					</div>
				</BentoGridItem>
			{/each}
		</BentoGrid>
	</BlurFade>
</section>

<style>
	@keyframes text-gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
