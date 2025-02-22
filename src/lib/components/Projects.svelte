<script lang="ts">
	import BentoGrid from './ui/BentoGrid.svelte';
	import BentoSkeleton from './ui/BentoSkeleton.svelte';
	import BentoGridItem from './ui/BentoGridItem.svelte';

	// Icons, you can use any icon library you like
	import IconArrowWaveRightUp from '$lib/assets/test.svg';
	import IconBoxAlignRightFilled from '$lib/assets/test.svg';
	import IconBoxAlignTopLeft from '$lib/assets/test.svg';
	import IconClipboardCopy from '$lib/assets/test.svg';
	import IconFileBroken from '$lib/assets/test.svg';
	import IconSignature from '$lib/assets/test.svg';
	import IconTableColumn from '$lib/assets/test.svg';

	import tt from '$lib/assets/tt.jpeg';
	import WhiteShineText from './ui/WhiteShineText.svelte';

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			header: BentoSkeleton,
			headerImage: tt,
			icon: IconClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			header: BentoSkeleton,
			icon: IconFileBroken
		},
		{
			title: 'The Art of Design',
			description: 'Discover the beauty of thoughtful and functional design.',
			header: BentoSkeleton,
			icon: IconSignature
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			header: BentoSkeleton,
			icon: IconTableColumn
		},
		{
			title: 'The Pursuit of Knowledge',
			description: 'Join the quest for understanding and enlightenment.',
			header: BentoSkeleton,
			icon: IconArrowWaveRightUp
		},
		{
			title: 'The Joy of Creation',
			description: 'Experience the thrill of bringing ideas to life.',
			header: BentoSkeleton,
			icon: IconBoxAlignTopLeft
		},
		{
			title: 'The Spirit of Adventure',
			description: 'Embark on exciting journeys and thrilling discoveries.',
			header: BentoSkeleton,
			icon: IconBoxAlignRightFilled
		}
	];
	//    icon class="h-4 w-4 text-neutral-500"
</script>

<div class="title-cont px-28">
	<WhiteShineText text={"Projects"}/>
</div>
<BentoGrid class="mx-auto max-w-4xl px-10 md:px-0">
	{#each items as item, i}
		<BentoGridItem
			title={item.title}
			description={item.description}
			class={i === 3 || i === 6 ? 'md:col-span-2' : ''}
		>
			<div slot="header">
				<!-- <svelte:component this={item.header} /> -->
				<img src={item.headerImage} alt={item.title} class="h-32 w-full rounded-lg object-cover" />
			</div>
			<div slot="icon">
				<img src={item.icon} alt="svg_icons" class="h-4 w-4 text-neutral-500" />
			</div>
		</BentoGridItem>
	{/each}
</BentoGrid>

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

	.animate-text-gradient {
		background-image: linear-gradient(90deg, #ffffff, #a0a0a0, #ffffff);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		animation: text-gradient 3s linear infinite;
	}

	
</style>