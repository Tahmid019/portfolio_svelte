<script lang="ts">
    export let programmingLanguages: { name: string; image: string }[] = [];
    export let frameworks: { name: string; image: string }[] = [];
    export let tools: { name: string; image: string }[] = [];
  
    const allItems = [...programmingLanguages, ...frameworks, ...tools];
  </script>
  
  <style>
    .grid-item {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .grid-item:hover {
      transform: scale(1.1);
      z-index: 10;
    }
  
    .grid-item:hover ~ .grid-item {
      transform: scale(1.05);
    }
  </style>
  
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
    {#each allItems as item, index}
      <div class="grid-item relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out">
        <img src={item.image} alt={item.name} class="w-full h-32 object-contain p-4" />
        <div class="p-2 text-center text-sm font-semibold">{item.name}</div>
      </div>
    {/each}
  </div>