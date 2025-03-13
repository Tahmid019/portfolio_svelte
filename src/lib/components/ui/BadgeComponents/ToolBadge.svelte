<script lang="ts">
    export let link: {name: string, image: string};
</script>

<img
    class="h-10 w-auto rounded-lg"
    src={link.image}
    alt={link.name}
/>
