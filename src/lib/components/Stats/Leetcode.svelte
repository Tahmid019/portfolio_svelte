<script lang="ts">
	import { onMount } from 'svelte';

	const radius = 70;
	const circumference = 2 * Math.PI * radius;

	let data: any = {};
	let easy = 0, medium = 0, hard = 0;
	let per_easy = 0, per_medium = 0, per_hard = 0;
	let totaleasy = 1, totalmedium = 1, totalhard = 1;
	let totalSolved = 0, totalProblems = 1;

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

			totalSolved = data.totalSolved;
			totalProblems = totaleasy + totalmedium + totalhard;

			per_easy = Math.ceil((easy / totaleasy) * 100);
			per_medium = Math.ceil((medium / totalmedium) * 100);
			per_hard = Math.ceil((hard / totalhard) * 100);
		} catch (error) {
			console.error('Error fetching LeetCode data', error);
		}
	});
</script>

<div class="rounded-2xl bg-white/5 p-8 shadow-2xl backdrop-blur-md border border-white/10">
	<div class="text-center text-3xl font-extrabold text-white tracking-wide">LeetCode Stats</div>
	<div class="mt-2 text-center text-lg font-semibold text-slate-400">
		Username: <span class="text-white">Tahmid019</span>
	</div>

	<div class="mt-8 flex flex-col items-center justify-center gap-10 lg:flex-row">
		<!-- Progress Bars -->
		<div class="w-full max-w-md space-y-6">
			<div>
				<span class="flex justify-between text-lg">
					<span class="text-green-400 font-semibold">Easy</span>
					<span class="text-gray-200 font-medium">{easy}/{totaleasy}</span>
				</span>
				<div class="h-3 w-full rounded-full bg-gray-700">
					<div
						class="h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-in-out"
						style="width: {per_easy}%"
					></div>
				</div>
			</div>

			<div>
				<span class="flex justify-between text-lg">
					<span class="text-yellow-400 font-semibold">Medium</span>
					<span class="text-gray-200 font-medium">{medium}/{totalmedium}</span>
				</span>
				<div class="h-3 w-full rounded-full bg-gray-700">
					<div
						class="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-700 ease-in-out"
						style="width: {per_medium}%"
					></div>
				</div>
			</div>

			<div>
				<span class="flex justify-between text-lg">
					<span class="text-red-400 font-semibold">Hard</span>
					<span class="text-gray-200 font-medium">{hard}/{totalhard}</span>
				</span>
				<div class="h-3 w-full rounded-full bg-gray-700">
					<div
						class="h-3 rounded-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-700 ease-in-out"
						style="width: {per_hard}%"
					></div>
				</div>
			</div>
		</div>

		<!-- Circular Total Solved -->
		<div class="relative flex h-48 w-48 items-center justify-center">
			<svg class="h-full w-full -rotate-90" viewBox="0 0 200 200">
				<!-- Background Circle -->
				<circle
					cx="100"
					cy="100"
					r={radius}
					stroke="gray"
					stroke-width="14"
					fill="none"
					opacity="0.2"
				/>
				<!-- Progress Circle -->
				<circle
					cx="100"
					cy="100"
					r={radius}
					stroke="url(#circleGradient)"
					stroke-width="14"
					fill="none"
					stroke-dasharray={circumference}
					stroke-dashoffset={circumference - (totalSolved / totalProblems) * circumference}
					stroke-linecap="round"
					class="transition-all duration-700 ease-in-out"
				/>
				<defs>
					<linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#60a5fa" />
						<stop offset="100%" stop-color="#3b82f6" />
					</linearGradient>
				</defs>
			</svg>
			<div class="absolute flex flex-col items-center">
				<span class="text-3xl font-extrabold text-blue-400">{totalSolved}</span>
				<span class="text-sm font-medium text-gray-300">Solved / {totalProblems}</span>
			</div>
		</div>
	</div>
</div>
