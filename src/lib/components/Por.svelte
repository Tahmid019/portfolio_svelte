<script lang="ts">
	import {reveal} from 'svelte-reveal';

	import HoverCard from '$lib/components/ui/HoverCard.svelte';
	import BlurFade from './ui/BlurFade.svelte';
	import Subhead from './ui/TextLayouts/Subhead.svelte';
	// import WhiteShineText from './ui/WhiteShineText.svelte';

	import ml_bg from '$lib/assets/webp/ml.webp';
	import fl_bg from '$lib/assets/webp/flutter.webp';
	import fin_bg from '$lib/assets/webp/fin.webp';

	type TimelineItem = {
		year?: string;
		title: string;
		description: string;
		image?: string;
		date?: string;
		deploymentLink?: string;
		githubLink?: string;
	};

	const timelineItems: TimelineItem[] = [
		{
			year: '2024',
			title: 'ML Team',
			description:
				'Joined in 2024, as the Machine Learing Team Member of ML Club NIT Silchar. Contributed in project based in Natural Language Processing and Speech-2-Speech research. Organized the Orientation, Club CLasses and Neurathon-2025.',
			image: ml_bg,
			date: 'August 2024 - present'
		},
		{
			year: '2024',
			title: 'GDGC-Flutter Developer',
			description:
				'Joined in 2024, as the Flutter Member of GDGC NIT Silchar. Contributed in project based in Flutter and Firebase. Contributed in the Orientations and Workshops (Flutter Forward).',
			image: fl_bg,
			date: 'September 2024 - present'
		},
		{
			year: '2024',
			title: 'Finance Club- Web Team',
			description:
				'Joined in 2024, as the Web Developer of Finance Club NIT Silchar. Contributed in Finance Club Official Website Making and Event Management.',
			image: fin_bg,
			date: 'June 2024'
		}
	];
</script>


<section class="Por-container p-4 md:p-14 lg:p-20  xl:mx-[13%]">
	<!-- Heading -->
	<header
	use:reveal
	class="flex w-auto items-center justify-center font-semibold text-white backdrop-blur-sm"
>
	<Subhead text={"P.O.R."}/>
	</header>
	
	<BlurFade>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each timelineItems as item, index}
			<HoverCard {item} {index} />
		{/each}
	</div>
</BlurFade>
</section>
