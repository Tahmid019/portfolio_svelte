<script lang="ts">
    import TechSTack from "./ui/TechSTack.svelte";
    import WhiteShineText from "./ui/WhiteShineText.svelte";
  
    const programmingLanguages = [
      { name: 'JavaScript', image: '/images/javascript.png' },
      { name: 'Python', image: '/images/python.png' },
    ];
  
    const frameworks = [
      { name: 'React', image: '/images/react.png' },
      { name: 'Svelte', image: '/images/svelte.png' },
    ];
  
    const tools = [
      { name: 'Git', image: '/images/git.png' },
      { name: 'Docker', image: '/images/docker.png' },
    ];
  </script>
  
  <section class="Por-container px-4 md:px-14 lg:px-20 scale-[0.75]">
    <div class="title-cont">
      <WhiteShineText text={"Tools"}/>
    </div>
    <TechSTack {programmingLanguages} {frameworks} {tools} />
  </section>