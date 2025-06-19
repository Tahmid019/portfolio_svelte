<script lang="ts">
	import RetroGrid from './ui/divBg/RetroGrid.svelte';
	export let lastUpdated: string | "--/--/--";
</script>

<footer class="relative mt-28 text-center text-white">
	<p class="mb-2 text-sm text-gray-400">
		Last updated: <span class="font-semibold text-white">{lastUpdated}</span>
	</p>

	<p class="mb-2 text-sm text-gray-400">
		{'Live to Fail. Die for Success.'}
	</p>

	<p class="text-sm text-gray-400">
		<a href="https://linkedin.com/in/tahmid019" class="hover:underline">Linkedin</a> |
		<a href="mailto:tahmidchoudhury.dev@gmail.com" class="hover:underline">Email</a> |
		<a href="/" class="hover:underline">Contact</a>
	</p>

	<RetroGrid />
</footer>
