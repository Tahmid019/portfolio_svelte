<script lang="ts">
  import { onMount, tick } from 'svelte';
  import BlurFade from "./BlurFade.svelte";
  

type TimelineItem = {
		year?: string;
		title: string;
		description: string;
		image?: string;
		date?: string;
		deploymentLink?: string;
		githubLink?: string;
	};

  export let timelineItems: TimelineItem[];

  export let gradVar: string =
		'font-bold animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-center text-transparent bg-clip-text';

    onMount(async () => {
		await tick();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleItems = new Set([
							...visibleItems,
							Number((entry.target as HTMLElement).dataset.index)
						]);
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('.timeline-item').forEach((el, index) => {
			el.setAttribute('data-index', index.toString());
			observer.observe(el);
		});
	});

let visibleItems = new Set<number>();

</script>

<div class="container mx-auto">
  <BlurFade delay={0.15}>
    <h2
      class="mb-10 text-center text-3xl font-bold tracking-tighter {gradVar} sm:text-4xl lg:text-5xl"
    >
      Projects
    </h2>
  </BlurFade>

  <div class="relative">
    <!-- Timeline Vertical Line -->
    <div
      class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 md:block"
    ></div>

    <BlurFade delay={0.25}>
      {#each timelineItems as item, index}
        <div
          class="timeline-item relative mb-12 flex translate-y-10 flex-col items-center opacity-0 transition-all duration-700 ease-out md:flex-row md:items-start"
          class:opacity-100={visibleItems.has(index)}
          class:translate-y-0={visibleItems.has(index)}
        >
          <!-- Alternate Sides on Large Screens -->
          <div
            class="w-full px-4 md:w-1/2 {index % 2 === 0 ? 'md:order-1' : 'md:order-2'}"
          >
            <div
              class="group rounded-lg border border-slate-800 bg-slate-900/35 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
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

          <!-- Year (on the opposite side) -->
          <div
            class="w-full px-4 text-center md:w-1/2 {index % 2 === 0 ? 'md:order-2' : 'md:order-1'}"
          >
            {#if item.year}
              <p class="text-lg font-bold text-gray-400">{item.year}</p>
            {/if}
          </div>
        </div>
      {/each}
    </BlurFade>
  </div>
</div>