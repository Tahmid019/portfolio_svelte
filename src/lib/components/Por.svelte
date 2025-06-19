<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import HoverCard from '$lib/components/ui/HoverCard.svelte';
	import HoverCard2 from '$lib/components/ui/HoverCard2.svelte';
	import BlurFade from './ui/BlurFade.svelte';
	import Subhead from './ui/TextLayouts/Subhead.svelte';
	// import WhiteShineText from './ui/WhiteShineText.svelte';

	import pors from '$lib/data/por.js';

	type TimelineItem = {
		year?: string;
		title: string;
		description: string;
		image?: string;
		date?: string;
		deploymentLink?: string;
		githubLink?: string;
		link?: string;
		timeline?: any;
	};

	const timelineItems: TimelineItem[] = pors;
</script>

<section class="Por-container p-4 md:p-14 lg:p-20 xl:mx-[13%]">
	<!-- Heading -->
	<header
		use:reveal
		class="flex w-auto items-center justify-center font-semibold text-white backdrop-blur-sm"
	>
		<Subhead text={'P.O.R.'} />
	</header>

	<BlurFade>
		<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{#each timelineItems as item, index}
				{#if index === 0}
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						class="col-span-1 sm:col-span-2 lg:col-span-3"
					>
						<HoverCard2 {item} {index} />
					</a>
				{:else}
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						class="contents"
					>
						<HoverCard {item} {index} />
					</a>
				{/if}
			{/each}
		</div>
	</BlurFade>
</section>
