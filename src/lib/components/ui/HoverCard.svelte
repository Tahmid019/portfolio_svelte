<script lang="ts">
	type TimelineItem = {
		year?: string;
		title: string;
		description: string;
		image?: string;
		date?: string;
		deploymentLink?: string;
		githubLink?: string;
	};
	export let item: TimelineItem;
	export let index: number;
</script>

<div class="w-full px-4 {index % 2 === 0 ? 'md:order-1' : 'md:order-2'}">
	<div
		class="group rounded-lg border border-slate-800 bg-slate-900/35 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
	>
		<!-- Image -->
		{#if item.image}
			<enhanced:img
				src={item.image}
				alt={item.title}
				class="mb-4 h-48 w-full rounded-lg object-cover transition-all duration-300 group-hover:brightness-110"
			/>
		{/if}

		<!-- Title -->
		<h3
			class="mb-2 text-2xl font-bold text-white transition-all duration-300 group-hover:text-gray-900"
		>
			{item.title}
		</h3>

		<!-- Date -->
		{#if item.date}
			<p class="mb-2 text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-600">
				{item.date}
			</p>
		{/if}

		<!-- Description -->
		<p class="mb-4 text-gray-300 transition-all duration-300 group-hover:text-gray-700">
			{item.description}
		</p>

		<!-- Links -->
		<div class="flex gap-4">
			{#if item.deploymentLink}
				<a
					href={item.deploymentLink}
					target="_blank"
					class="text-sm text-purple-400 transition-all duration-300 hover:text-purple-600"
				>
					Deployment Link
				</a>
			{/if}
			{#if item.githubLink}
				<a
					href={item.githubLink}
					target="_blank"
					class="text-sm text-purple-400 transition-all duration-300 hover:text-purple-600"
				>
					GitHub Link
				</a>
			{/if}
		</div>
	</div>
</div>
