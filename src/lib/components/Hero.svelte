<script lang="ts">
	import BlurFade from '$lib/components/ui/BlurFade.svelte';
    import socialLinks from '$lib/data/socialLinks.js';
	
</script>

<section class="bg-transparent pb-28 pt-20 lg:pb-0 px-6 md:px-12 lg:px-24 xl:px-36">
	<div
		class="hero-container mx-auto flex flex-col items-center  lg:flex-row "
	>
		<!-- Text Content -->
		<div class="container mx-auto px-4 pb-12 text-center md:px-6 md:pt-20 lg:pt-32 lg:text-right">
			<BlurFade delay={0.25}>
				<h1
					class="mb-8 text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					<div class="animate-text-gradient">Tahmid Choudhury</div>
				</h1>
			</BlurFade>

			<BlurFade delay={0.5}>
				<p class="mb-8 text-lg text-gray-300 sm:text-xl xl:text-2xl">
					Developer | Designer | Dreamer
				</p>
			</BlurFade>

			<BlurFade delay={0.75}>
				<div class="flex items-center justify-center gap-4 lg:justify-end">
					{#each socialLinks as { href, label, iconClass }}
						<a
							{href}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
							aria-label={label}
						>
							<i class={iconClass + ' text-xl'}></i>
						</a>
					{/each}
				</div>
			</BlurFade>
		</div>

		<!-- Image -->
		<div class="img w-full max-w-xs sm:max-w-sm md:max-w-md md:pt-14 lg:pt-20 lg:max-w-lg">
			<BlurFade delay={0.75}>
				<img
					src="/cateye.gif"
					alt="Tahmid Choudhury"
					class="h-auto w-full rounded-lg shadow-2xl grayscale transition-all duration-300 hover:grayscale-0"
				/>
			</BlurFade>
		</div>
	</div>
</section>

<style>
	@keyframes text-gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-text-gradient {
		background-image: linear-gradient(90deg, #ffffff, #a0a0a0, #ffffff);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		animation: text-gradient 3s linear infinite;
	}

	.hero-container {
		max-width: 1440px;
		margin: 0 auto;
	}
</style>
