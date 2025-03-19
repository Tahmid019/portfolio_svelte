<script lang="ts">
	export let title = 'About Me';
	export let des = {
		text: 'itaque commodi esse ut minus veniam maiores, veritatis neque asperiores odit voluptate ratione hic quaerat voluptates expedita velit temporibus. Facere distinctio libero facilis est reprehenderit eaque incidunt consectetur veritatis? Sapiente accusantium optio odio tempora placeat! Id recusandae deserunt omnis.'
	};
</script>

<div
	class="glass-container h-[35%] w-[70%] rounded-xl border border-slate-800 bg-black/75 backdrop-blur-xl"
>
	<div class="info-container flex flex-col justify-center gap-5 p-10 align-middle">
		<h1 class="text-center text-4xl font-semibold text-white">{title}</h1>
		<p class="text-justify text-base text-white">{des.text}</p>
	</div>
</div>
