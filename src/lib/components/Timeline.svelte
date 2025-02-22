<script lang="ts">
	import TimelineUi from './ui/TimelineUI.svelte';

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
			description: 'The idea of a Finance Club was initiated by the 2023 batch as a WhatsApp group.',
			image: 'https://via.placeholder.com/400x200',
			date: 'January 2023'
		},
		{
			year: '2023',
			title: 'Unofficial Meetups',
			description:
				'Students interested in finance held informal meetups on campus throughout the year. The formal idea of forming a dedicated Finance Club emerged due to the perceived lack of financial literacy within the campus.',
			image: 'https://via.placeholder.com/400x200',
			date: 'March 2023'
		},
		{
			year: '2024',
			title: 'First Official Events',
			description:
				'In January, the first official orientation for the 2026 batch was held. Stock simulation events and finance-related webinars were organized throughout the year.',
			image: 'https://via.placeholder.com/400x200',
			date: 'January 2024',
			deploymentLink: 'https://example.com',
			githubLink: 'https://github.com/example'
		},
		{
			year: '2024',
			title: 'Growth and Collaboration',
			description:
				'Numerous events and activities took place, with an increased frequency in the last six months. In September, junior members (2025 batch) were recruited. A team of 35 second-year members was formed, led by 6 third-year students, with 4th-year students serving as mentors. In October, collaboration with StockGro significantly elevated the club’s profile and activities.',
			image: 'https://via.placeholder.com/400x200',
			date: 'October 2024'
		},
		{
			year: '2025',
			title: 'Continuation of Legacy',
			description:
				'On February 1st, orientation for the 2028 batch will take place, marking the continuation of the Finance Club’s legacy.',
			image: 'https://via.placeholder.com/400x200',
			date: 'February 2025'
		}
	];

	

	
</script>

<section class="relative bg-transparent">
	<TimelineUi {timelineItems} />
</section>