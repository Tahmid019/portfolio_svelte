<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import Tools from './SkillComponents/Tools.svelte';
	import Interests from './SkillComponents/Interests.svelte';
	import Statistics from './SkillComponents/Statistics.svelte';
	import Subhead from './ui/TextLayouts/Subhead.svelte';
	import BlurFade from './ui/BlurFade.svelte';

	let activeTab: number = 0;

	const tabs: string[] = [
		'Tools',
		'Interests',
		'Statistics'
	];

	const handleTabChange = (index: number) => {
		activeTab = index;
	};
</script>

<section id="skills" class="">
	<!-- Heading -->
	<Subhead text="Skills" />

	<BlurFade>

	<!-- Mobile -->
	<div use:reveal class="mx-5 sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<select
			id="tabs"
			class="block w-full rounded-lg border-2 border-gray-300 bg-[#000] p-2.5 text-sm text-[#858585] focus:border-gray-200 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-all duration-300 transform hover:scale-105 focus:scale-105 hover:shadow-lg hover:shadow-[#9b79f71c] focus:shadow-lg focus:shadow-[#7986f71c]"
			on:change={(e) => handleTabChange((e.target as HTMLSelectElement).selectedIndex ?? 0)}
		>
			{#each tabs as tab, index}
				<option
					value={index}
					class="bg-gradient-to-r from-[#000] to-[#1a1a1a] p-2 text-[#858585] transition-all duration-300 hover:bg-[#b879f71c] hover:text-gray-200 hover:shadow-inner hover:shadow-[#b079f71c] focus:bg-[#b479f71c] focus:text-gray-200 focus:shadow-inner focus:shadow-[#9679f71c]"
				>
					{tab}
				</option>
			{/each}
		</select>
	</div>
	

	<!-- pc -->
	<div
		id="container"
		class="flex flex-col gap-6 rounded-xl backdrop-blur-lg sm:mx-14 md:mx-24 xl:mx-28"
	>
		<div class="radio-container m-5 ml-0 hidden h-min flex-row justify-center sm:flex">
			{#each tabs as tab, index}
				<div class="relative">
					<input
						id={`radio-${index}`}
						name="radio"
						type="radio"
						checked={activeTab === index}
						on:click={() => handleTabChange(index)}
						class="absolute opacity-0"
					/>
					<label
						for={`radio-${index}`}
						class="relative cursor-pointer p-4 text-gray-500 transition-all duration-300 hover:text-gray-200 {activeTab === index ? 'text-gray-200 font-semibold' : ''}"
					>
						{tab}
						{#if activeTab === index}
							<div class="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-all duration-300"></div>
						{/if}
					</label>
				</div>
			{/each}
		</div>

		
		<!-- Content -->
		<div class="h-auto w-full ">
			{#if activeTab === 0}
			<Tools />
			{:else if activeTab === 1}
				<Interests />
				{:else if activeTab === 2}
				<Statistics />
				{/if}
			</div>
		</div>
	</BlurFade>
</section>

<style>
	.radio-container {
		display: flex;
		gap: 1rem;
		position: relative;
	}

	.radio-container input {
		display: none;
	}

	.radio-container label {
		position: relative;
		transition: color 0.3s ease, transform 0.3s ease;
	}

	.radio-container label:hover {
		transform: translateY(-2px);
	}

	@media screen and (max-width: 640px) {
		.radio-container {
			display: none !important;
		}
	}
</style>