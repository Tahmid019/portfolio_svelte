<script lang="ts">
    import TechSTack from "$lib/components/ui/TechSTack.svelte";
    import WhiteShineText from "$lib/components/ui/WhiteShineText.svelte";
  
    // import tools from '$lib/data/tools.js';
    const tools = {
    programmingLanguages: [
      { name: 'JavaScript', image: 'https://via.placeholder.com/100' },
      { name: 'Python', image: 'https://via.placeholder.com/100' },
    ],
    frameworks: [
      { name: 'React', image: 'https://via.placeholder.com/100' },
      { name: 'Vue', image: 'https://via.placeholder.com/100' },
    ],
    tools: [
      { name: 'Git', image: 'https://via.placeholder.com/100' },
      { name: 'Docker', image: 'https://via.placeholder.com/100' },
    ],
  };
  </script>
  
  <div class="Por-container px-4 md:px-14 lg:px-20 scale-[0.75]">
    <TechSTack {tools} />
  </div>