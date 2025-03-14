<script lang="ts">
  import SetBadge from "./BadgeComponents/SetBatch.svelte";
  export let title: string;
  export let badges: {name:string, image:string}[];
</script>

<div class="container flex flex-col md:flex-row justify-center items-center gap-2 md:p-10">
  <div class="title w-[50%] lg:w-[20%] h-full text-xl md:text-2xl font-bold text-center text-gray-300 self-center md:mr-5">
    <h1 class="w-full">{title}</h1>
  </div>
  
  <div class="badge-container md:w-[80%] h-full flex flex-wrap gap-3 justify-center self-center ">
    <SetBadge badges={badges} />
  </div>
</div>