<!-- <script lang="ts">
    export let tools: {
      programmingLanguages: { name: string; image: string }[];
      frameworks: { name: string; image: string }[];
      tools: { name: string; image: string }[];
    };

    let allItems = [
      ...tools.programmingLanguages,
      ...tools.frameworks,
      ...tools.tools
    ];
  </script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
  {#each allItems as item}
    <div
      class="group relative flex flex-row justify-center align-middl gap-6 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <div class="svg-container py-1 pl-0 pr-5">
        <img src={item.image} alt={item.name} class="h-10 w-10 object-contain" />
      </div>
      <div class="p-3 text-center bg-gray-50">
        <span class="text-sm font-semibold text-gray-700">{item.name}</span>
      </div>
    </div>
  {/each}
</div> -->

<script lang="ts">
  import SetBadge from "./BadgeComponents/SetBatch.svelte";

  const badges: {name:string, image:string}[] = [
        { name: 'JavaScript', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Python', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'React', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Vue', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Git', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Docker', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'JavaScript', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Python', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'React', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Vue', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Git', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
        { name: 'Docker', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    ];
</script>

<div class="container flex flex-row justify-center align-middle gap-2">
  <div class="title min-w-28 text-2xl md:text-3xl lg:text-3xl font-bold text-center text-gray-300 self-center mr-5">
    <h1 class="">Tech Stack</h1>
  </div>
  <SetBadge badges={badges} />
</div>