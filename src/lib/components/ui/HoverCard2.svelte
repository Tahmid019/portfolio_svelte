<script lang="ts">
	type TimelineItem = {
		year?: string;
		title: string;
		description: string;
		image?: string;
		date?: string;
		deploymentLink?: string;
		githubLink?: string;
        timeline?:any;
	};
	export let item: TimelineItem;
	export let index: number;
</script>

<div class="w-full px-4 {index % 2 === 0 ? 'md:order-1' : 'md:order-2'}">
	<div
		class="rounded-lg border border-slate-800 bg-slate-900/35 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105  hover:shadow-xl"
	>
		<!-- Image -->
		{#if item.image}
			<img
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
			<p class="mb-2 text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-600">
				{item.date}
			</p>
		{/if}

		<!-- Description -->
		<p class="mb-4 lg:text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-700">
			{item.description}
		</p>

        <!-- Timeline -->
        <div class="w-full px-4">
           
            <div class="relative grid grid-cols-3 md:flex-row">

                {#each item.timeline as entry, i}
                <div class="group mb-8 h-fit flex items-start md:items-center md:mb-0 md:flex-1
                            md:even:flex-col md:odd:flex-col-reverse "
                    class:md:ml-8={i > 0}>

                    <!-- Content -->
                    <div class="ml-4 rounded-lg border border-slate-800 bg-slate-900/35 p-6 shadow-lg backdrop-blur-md 
                            transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-xl
                            md:ml-0 md:mt-4 md:mb-4 md:w-[90%] md:even:self-end md:odd:self-start">
                    {#if entry.image}
                    <img
                        src={entry.image}
                        alt={entry.description}
                        class="mb-4 h-40 w-full rounded-lg object-cover transition-all duration-300 group-hover:brightness-110 grayscale group-hover:grayscale-0"
                    />
                    {/if}

                    <p class="mb-1 text-sm font-semibold text-orange-400 transition-all duration-300 group-hover:text-orange-300">
                        {entry.date}
                    </p>
                    <p class="text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                        {entry.description}
                    </p>
                    </div>
                </div>
                {/each}
            </div>
        </div>

<!-- Links -->
		<div class="flex gap-4">
            {#if item.deploymentLink}
				<a
                href={item.deploymentLink}
					target="_blank"
					class="text-sm text-orange-400 transition-all duration-300 hover:text-orange-600"
				>
					Deployment Link
				</a>
			{/if}
			{#if item.githubLink}
				<a
					href={item.githubLink}
					target="_blank"
					class="text-sm text-orange-400 transition-all duration-300 hover:text-orange-600"
				>
					GitHub Link
				</a>
			{/if}
		</div>
	</div>
</div>
