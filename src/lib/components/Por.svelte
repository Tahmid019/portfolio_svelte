<script lang="ts">
	import HoverCard from '$lib/components/ui/HoverCard.svelte';
	import WhiteShineText from './ui/WhiteShineText.svelte';

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
			year: '2023',
			title: 'Idea Initiated',
			description:
				'The idea of a Finance Club was initiated by the 2023 batch as a WhatsApp group.',
			image: 'https://via.placeholder.com/400x200',
			date: 'January 2023'
		},
		{
			year: '2023',
			title: 'First Meetup',
			description:
				'The first official meetup was conducted, introducing members to financial literacy.',
			image: 'https://via.placeholder.com/400x200',
			date: 'March 2023'
		},
		{
			year: '2024',
			title: 'Club Expansion',
			description:
				'The club expanded its reach, collaborating with various institutions.',
			image: 'https://via.placeholder.com/400x200',
			date: 'June 2024'
		}
	];
</script>


<section class="Por-container p-4 md:p-14 lg:p-20 scale-[0.75]">
	<div class="title-cont">
		<WhiteShineText text={"POR"}/>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each timelineItems as item, index}
			<HoverCard {item} {index} />
		{/each}
	</div>
</section>
