<script lang="ts">
    import ToolBadge from "./ToolBadge.svelte";
    
    export let badges: {name:string, image:string}[];
    // const badges: {name:string, image:string}[] = [
    //     { name: 'JavaScript', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Python', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'React', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Vue', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Git', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Docker', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'JavaScript', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Python', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'React', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Vue', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Git', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    //     { name: 'Docker', image: 'https://img.shields.io/badge/Node.JS-darkgreen?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    // ];
</script>

<div class="flex flex-wrap gap-3 text-gray-300 justify-center">
    {#each badges as badge}
        <ToolBadge link={badge} />
    {/each}
</div>