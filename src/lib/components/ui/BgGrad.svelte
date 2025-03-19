<script lang="ts">
	import TextHoverShine from './TextHoverShine.svelte';
</script>

<div
	class="gradient-bg hover-effect flex h-screen w-screen items-center justify-center rounded-lg text-4xl font-bold text-white shadow-lg"
	role="presentation"
>
	<div class="flex items-center justify-center">
		<TextHoverShine text="Updating . . ." />
	</div>
</div>

<style>
	.gradient-bg {
		background: linear-gradient(45deg, #212121, #000000, #1a1a1a);
		background-size: 300% 300%;
		animation: gradientAnimation 10s ease infinite;
	}

	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.hover-effect {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.hover-effect:hover {
		transform: scale(1.05);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
</style>
