<script lang="ts">
	import SetBadge from './BadgeComponents/SetBatch.svelte';
	export let title: string;
	export let badges: { name: string; image: string }[];
</script>

<div class="container flex flex-col items-center justify-center gap-2 md:flex-row md:p-10">
	<div
		class="title h-full w-[50%] self-center text-center text-xl font-bold text-gray-300 md:mr-5 md:text-2xl lg:w-[20%]"
	>
		<h1 class="w-full">{title}</h1>
	</div>

	<div class="badge-container flex h-full flex-wrap justify-center gap-3 self-center md:w-[80%]">
		<SetBadge {badges} />
	</div>
</div>
