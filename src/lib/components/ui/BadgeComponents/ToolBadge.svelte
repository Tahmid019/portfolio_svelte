<script lang="ts">
    export let link: { name: string; image: string };
</script>

<div class="group inline-block p-1  shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl">
    <img 
        class="h-auto w-auto rounded contrast-125 drop-shadow-m grayscale group-hover:grayscale-0 transition-all duration-200"
        src={link.image}
        alt={link.name}
    />
</div>
