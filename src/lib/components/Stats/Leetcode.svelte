<script lang="ts">
	import { onMount } from 'svelte';

	const radius = 60;
	const circumference = 2 * Math.PI * radius;
	let data: any = {};
	let easy = 0,
		medium = 0,
		hard = 0;
	let per_easy = 0,
		per_medium = 0,
		per_hard = 0;
	let totaleasy = 1,
		totalmedium = 1,
		totalhard = 1;
	let acceptanceRate = 0;

	onMount(async () => {
		try {
			const response = await fetch('https://leetcode-stats-api.herokuapp.com/Tahmid019');
			data = await response.json();
			easy = data.easySolved;
			medium = data.mediumSolved;
			hard = data.hardSolved;
			totaleasy = data.totalEasy;
			totalmedium = data.totalMedium;
			totalhard = data.totalHard;
			acceptanceRate = data.acceptanceRate || 0;

			per_easy = Math.ceil((easy / totaleasy) * 100);
			per_medium = Math.ceil((medium / totalmedium) * 100);
			per_hard = Math.ceil((hard / totalhard) * 100);
		} catch (error) {
			console.error('Error fetching LeetCode data', error);
		}
	});
</script>

<div class="rounded-lg p-6 text-slate-300 shadow-xl">
	<div class="text-center text-3xl font-extrabold">LeetCode Stats</div>
	<div class="mt-2 text-center text-lg font-semibold text-slate-600">
		Username: <span class="text-slate-300">Tahmid019</span>
	</div>

	<div class="mt-6 flex flex-col items-center justify-center gap-6 lg:flex-row">
		<!-- Progress Bars -->
		<div class="w-full max-w-md">
			<div class="space-y-4">
				<div class="relative w-full">
					<span class="flex justify-between text-lg">
						<span class="text-green-400">Easy</span>
						<span class="text-gray-200">{easy}/{totaleasy}</span>
					</span>
					<div class="h-2 w-full rounded-lg bg-gray-700">
						<div
							class="h-2 rounded-lg bg-green-500 transition-all duration-500 ease-in-out"
							style="width: {per_easy}%"
						></div>
					</div>
				</div>

				<div class="relative w-full">
					<span class="flex justify-between text-lg">
						<span class="text-yellow-400">Medium</span>
						<span class="text-gray-200">{medium}/{totalmedium}</span>
					</span>
					<div class="h-2 w-full rounded-lg bg-gray-700">
						<div
							class="h-2 rounded-lg bg-yellow-500 transition-all duration-500 ease-in-out"
							style="width: {per_medium}%"
						></div>
					</div>
				</div>

				<div class="relative w-full">
					<span class="flex justify-between text-lg">
						<span class="text-red-400">Hard</span>
						<span class="text-gray-200">{hard}/{totalhard}</span>
					</span>
					<div class="h-2 w-full rounded-lg bg-gray-700">
						<div
							class="h-2 rounded-lg bg-red-500 transition-all duration-500 ease-in-out"
							style="width: {per_hard}%"
						></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Circular prog-->
		<div class="relative flex h-40 w-40 items-center justify-center">
			<svg class="h-full w-full" viewBox="0 0 160 160">
				<!-- Background Circle -->
				<circle cx="80" cy="80" r="70" stroke="gray" stroke-width="10" fill="none" opacity="0.3" />
				<!-- Progress Circle -->
				<circle
					cx="80"
					cy="80"
					r="70"
					stroke="url(#gradient)"
					stroke-width="10"
					fill="none"
					stroke-dasharray={circumference}
					stroke-dashoffset={circumference - (acceptanceRate / 100) * circumference}
					stroke-linecap="round"
					class="transition-all duration-500 ease-in-out"
				/>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#ff7eb3" />
						<stop offset="100%" stop-color="#ff758c" />
					</linearGradient>
				</defs>
			</svg>
			<div class="absolute flex flex-col items-center text-lg font-bold">
				<span class="text-pink-400">{acceptanceRate}%</span>
				<span class="text-sm text-gray-300">Acceptance Rate</span>
			</div>
		</div>
	</div>
</div>
