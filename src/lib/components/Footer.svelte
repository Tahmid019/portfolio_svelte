<script lang="ts">
	import { onMount } from 'svelte';
	import RetroGrid from './ui/divBg/RetroGrid.svelte';
	let lastUpdated = 'Fetching...';

	async function fetchLastUpdated() {
		try {
			const response = await fetch(
				'https://api.github.com/repos/Tahmid019/portfolio_svelte/commits/main'
			);
			console.log(response);
			const data = await response.json();
			console.log(data);
			if (data.commit && data.commit.committer.date) {
				lastUpdated = new Date(data.commit.committer.date).toLocaleString();
			} else {
				lastUpdated = 'Failed to fetch';
			}
		} catch (error) {
			lastUpdated = 'Error fetching data';
		}
	}

	onMount(fetchLastUpdated);
</script>

<footer class="relative pt-10 text-center text-white">
	<!-- Last Upd -->
	<p class="mb-2 text-sm text-gray-400">
		Last updated: <span class="font-semibold text-white"
			>{'19-03-2025 (...more features loading)'}</span
		>
	</p>

	<!-- Misc -->
	<p class="mb-2 text-sm text-gray-400">
		{'Made with Busy Schedules (I am a sleepyt head 😅)'}
	</p>

	<!-- Links -->
	<p class="text-sm text-gray-400">
		<a href="https://linkedin.com/in/tahmid019" class="hover:underline">Linkedin</a> |
		<a href="/" class="hover:underline">Email</a> |
		<a href="/" class="hover:underline">Contact</a>
	</p>

	<RetroGrid />
</footer>
