<script lang="ts">
	import RetroGrid from './ui/divBg/RetroGrid.svelte';
    export let lastUpdated: String;
</script>

<footer class="relative text-white text-center mt-28">
    <p class="text-gray-400 text-sm mb-2">
        Last updated: <span class="font-semibold text-white">{lastUpdated}</span>
    </p>

    <p class="text-gray-400 text-sm mb-2">
        {"Made with sleep and caffain 🍵"}
    </p>

    <p class="text-gray-400 text-sm">
        <a href="https://linkedin.com/in/tahmid019" class="hover:underline">Linkedin</a> | 
        <a href="/" class="hover:underline">Email</a> | 
        <a href="/" class="hover:underline">Contact</a>
    </p>

    <RetroGrid />
</footer>