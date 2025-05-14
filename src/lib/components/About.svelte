<script lang="ts">
	import {reveal} from 'svelte-reveal';
	import { Cube } from './ui/index.js';
	import Subhead from './ui/TextLayouts/Subhead.svelte';
	import Subhead2 from './ui/TextLayouts/Subhead2.svelte';
	import BlurFade from './ui/BlurFade.svelte';
	
	export let title = 'About Me';
	

</script>

<section class="relative flex justify-center align-middle min-h-screen overflow-hidden">
	<BlurFade>
	<div class="abt-container flex w-full flex-col items-center justify-center ">
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

		<!-- Description -->
		<p class="text-justify text-base leading-relaxed text-white opacity-90">
			Hello! I am a passionate and driven student currently pursuing my studies at 
			<b> National Institute of Technology (NIT) Silchar</b>. I am deeply interested in Machine Learning, Software Development, and AI-driven solutions.
		</p>

		<!-- Current st -->
		<Subhead2 text={"Current Status"} /> 
		<p class="text-justify text-base leading-relaxed text-white opacity-90">
			<b>College:</b> NIT Silchar <br />
			<b>CGPA:</b>  <i>9.43</i> <br />
			<b>Year:</b> <i>2nd Year, B.Tech, Computer Science</i>
		</p>

		<!-- Edu -->
		<Subhead2 text={"Education"} />
		<p class="text-justify text-base leading-relaxed text-white opacity-90">
			<b>Higher Secondary:</b> <i>Govt. V.M. H.S. School</i> <br />
			<b>Primary Schooling:</b> <i>Spring Valley Central School</i>
		</p>

		<!-- Achievement -->
		<!-- <Subhead2 text={"Achievements"} />
		<ul class="list-disc pl-5 text-justify text-base leading-relaxed text-white opacity-90">
			<li>Selected for IEEE internship on <b>Intelligent Speech-to-Speech Translation</b></li>
			<li>Participated in <b>Smart India Hackathon 2024</b>, working on groundwater level prediction</li>
			<li>Member of <b>Machine Learning Club, NIT Silchar</b></li>
			<li>Developed AI-based solutions for job matchmaking and environmental monitoring</li>
			<li>Participated in multiple hackathons, including fraud detection challenges</li>
		</ul> -->
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

		h1 {
			font-size: 2rem;
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

		h1 {
			font-size: 1.75rem;
		}

		p {
			font-size: 0.75rem;
		}
	}
</style>
