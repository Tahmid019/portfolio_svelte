<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { ComponentType } from 'svelte';

	let _class = '';
	export { _class as class };
	export let title: string | ComponentType;
	export let description: string = '';
</script>

<div
	class={cn(
		'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-slate-900/75 p-4 backdrop-blur-md transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
		_class
	)}
>
	<slot name="header"></slot>
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<slot name="icon"></slot>
		<div class="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
			{#if typeof title === 'string'}
				{title}
			{:else}
				<slot name="title"></slot>
			{/if}
		</div>
		<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
			{#if description.length > 0}
				{description}
			{:else}
				<slot name="description"></slot>
			{/if}
		</div>
	</div>
</div>
