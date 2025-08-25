<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import { Cube } from './ui/index.js';
	import Subhead from './ui/TextLayouts/Subhead.svelte';
	import Subhead2 from './ui/TextLayouts/Subhead2.svelte';
	import BlurFade from './ui/BlurFade.svelte';

	export let title = 'About Me';
</script>

<section class="relative flex min-h-screen justify-center overflow-hidden align-middle">
	<BlurFade>
		<div class="abt-container flex w-full flex-col items-center justify-center">
			<div
				class="glass-container flex h-auto w-full justify-center rounded-xl border border-slate-800 bg-black/75 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
			>
				<div class="info-container flex flex-col justify-center gap-5 p-6 md:p-10">
					<header
						use:reveal
						class="flex w-auto items-center justify-center font-semibold text-white"
					>
						<Subhead text={title} />
					</header>

					<p class="text-justify text-lg leading-relaxed text-white/90 tracking-wide font-light">
					Hello! I am a passionate and driven student at 
					<span class="font-semibold text-white">National Institute of Technology (NIT) Silchar</span>.  
					My interests lie in <span class="font-medium text-indigo-200">Machine Learning</span>, 
					<span class="font-medium text-indigo-200">Software Development</span>, 
					and building impactful <span class="font-medium text-indigo-200">AI-driven solutions</span>.
					</p>

					<!-- Current Status -->
					<Subhead2 text={'Current Status'} />
					<div class="bg-white/5 backdrop-blur-sm rounded-xl p-5 mt-3 shadow-lg border border-white/10">
					<p class="text-base leading-relaxed text-white/85 font-light">
						<span class="font-semibold text-white">College:</span> NIT Silchar <br />
						<span class="font-semibold text-white">CGPA:</span> <i class="text-indigo-200">9.4</i> <br />
						<span class="font-semibold text-white">Year:</span> <i class="text-indigo-200">3rd Year, B.Tech in Computer Science</i>
					</p>
					</div>

					<!-- Education -->
					<Subhead2 text={'Education'} />
					<div class="bg-white/5 backdrop-blur-sm rounded-xl p-5 mt-3 shadow-lg border border-white/10">
					<p class="text-base leading-relaxed text-white/85 font-light">
						<span class="font-semibold text-white">Higher Secondary:</span> <i class="text-indigo-200">Govt. V.M. H.S. School</i> <br />
						<span class="font-semibold text-white">Primary Schooling:</span> <i class="text-indigo-200">Spring Valley Central School</i>
					</p>
					</div>


				</div>
			</div>

			<Cube
				width={0.5}
				height={0.5}
				depth={0.5}
				sectionStyle={'transition-all duration-300 hover:scale-110 inset-0 -z-10'}
			/>
		</div>
	</BlurFade>
</section>

<style>
	.glass-container {
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}

	.glass-container:hover {
		box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
	}

	.info-container {
		max-width: 800px;
	}

	.abt-container {
		min-height: 100vh;
	}

	@media (max-width: 768px) {
		.glass-container {
			width: 90%;
			padding: 1rem;
		}

		p {
			font-size: 0.875rem;
		}
	}

	@media (max-width: 480px) {
		.glass-container {
			width: 95%;
			padding: 0.5rem;
		}

		p {
			font-size: 0.75rem;
		}
	}
</style>
