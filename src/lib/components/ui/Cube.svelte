<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { OrbitControls } from 'three/examples/jsm/Addons.js';
	import { onMount } from 'svelte';

	export let defaultSectionStyel = 'inset-0 -z-10';
	export let sectionStyle = '';

	export let width = 0.8;
	export let height = 0.8;
	export let depth = 0.8;

	let spin = 0;
	let mouseX = 0;
	let mouseY = 0;
	let targetRotationX = 0;
	let targetRotationY = 0;
	const smoothingFactor = 0.1;

	onMount(() => {
		const handleMouseMove = (event: MouseEvent) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	SC.onFrame(() => {
		targetRotationX = mouseX * Math.PI * 0.5;
		targetRotationY = mouseY * Math.PI * 0.5;

		spin += 0.01;
	});
</script>

<section class="{defaultSectionStyel} {sectionStyle}">
	<SC.Canvas>
		<!-- <SC.Mesh geometry={new THREE.TorusGeometry()} /> -->
		<SC.Mesh
			geometry={new THREE.TorusKnotGeometry()}
			material={new THREE.MeshStandardMaterial({ color: 'white' })}
			scale={[width, height, depth]}
			rotation={[targetRotationX, targetRotationY + spin, 0]}
			castShadow
		/>
		<SC.PerspectiveCamera position={[1, 1, 3]} />
		<SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} />
		<SC.AmbientLight intensity={0.6} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }} />
	</SC.Canvas>
</section>
