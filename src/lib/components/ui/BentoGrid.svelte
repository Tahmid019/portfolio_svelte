<script>
	import { cn } from '$lib/utils';

	let _class = '';
	export { _class as class };
</script>

<div
	class={cn(
		'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
		_class
	)}
>
	<slot></slot>
</div>
