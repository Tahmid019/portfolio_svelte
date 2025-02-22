<script lang="ts">
    export let title = "About Me";
    export let des  = {
        text: "itaque commodi esse ut minus veniam maiores, veritatis neque asperiores odit voluptate ratione hic quaerat voluptates expedita velit temporibus. Facere distinctio libero facilis est reprehenderit eaque incidunt consectetur veritatis? Sapiente accusantium optio odio tempora placeat! Id recusandae deserunt omnis."
    };
</script>

<div class="glass-container bg-black/75 w-[70%] h-[35%] rounded-xl backdrop-blur-xl border border-slate-800 ">
    <div class="info-container flex flex-col justify-center align-middle p-10 gap-5">
            <h1 class="text-4xl font-semibold text-white text-center">{title}</h1>
            <p class="text-base text-white text-justify">{des.text}</p>

    </div>
</div>
