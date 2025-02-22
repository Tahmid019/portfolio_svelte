<script lang="ts">
  export let title = "About Me";
  export let des  = {
      text: "itaque commodi esse ut minus veniam maiores, veritatis neque asperiores odit voluptate ratione hic quaerat voluptates expedita velit temporibus. Facere distinctio libero facilis est reprehenderit eaque incidunt consectetur veritatis? Sapiente accusantium optio odio tempora placeat! Id recusandae deserunt omnis."
  };

  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Cube } from './ui/index.js';
  import GlassCard from './ui/GlassCard.svelte';
	import WhiteShineText from './ui/WhiteShineText.svelte';
</script>

<section class="min-h-screen flex overflow-hidden relative">
  <div class="abt-container w-full py-8 px-4 lg:px-56 flex flex-col items-center justify-center gap-8">
      <div class="glass-container flex justify-center bg-black/75 w-full md:w-[70%] lg:w-[60%] h-auto rounded-xl backdrop-blur-xl border border-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div class="info-container flex flex-col justify-center p-6 md:p-10 gap-5">
              <WhiteShineText text={title}/>
              <p class="text-base text-white text-justify opacity-90 leading-relaxed">
                  {des.text}
              </p>
          </div>
      </div>

      <Cube width={0.5} height={0.5} depth={0.5} sectionStyle={"transition-all duration-300 hover:scale-110"} />
  </div>
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