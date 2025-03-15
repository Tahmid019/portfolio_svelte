<script lang="ts">
    import { reveal } from "svelte-reveal";
	import BlurFade from "../BlurFade.svelte";
	import WhiteShineText from "../WhiteShineText.svelte";

    export let text = '...';
</script>

<header
		use:reveal
		class="flex w-auto items-center justify-center font-semibold text-white backdrop-blur-sm"
>
    <BlurFade>
        <WhiteShineText text={text}/>
    </BlurFade>
</header>
