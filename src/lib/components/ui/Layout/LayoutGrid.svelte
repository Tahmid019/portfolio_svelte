<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { optimize } from '$lib/image';
	import type { ComponentType } from 'svelte';
	import { Motion, AnimateSharedLayout } from 'svelte-motion';

	type Props = {
		Interest: string;
		Description: string;
	};

	type Card = {
		id: number;
		content: string | ComponentType;
		props: Props;
		class: string;
		thumbnail: string;
	};
	let selected: Card | null = null;
	let lastSelected: Card | null = null;

	let handleClick = (card: Card) => {
		lastSelected = selected;
		selected = card;
	};

	let handleOutsideClick = () => {
		lastSelected = selected;
		selected = null;
	};
	export let cards: Card[] = [];
</script>

<div class="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3">
	<AnimateSharedLayout type="crossfade">
		{#each cards as card}
			<div class={cn(card.class)}>
				<Motion layoutId={`card-${card.id}`} let:motion>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						on:click={() => {
							handleClick(card);
						}}
						class={cn(
							card.class,
							'relative overflow-hidden',
							selected?.id === card.id
								? 'absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2'
								: lastSelected?.id === card.id
									? 'z-40 h-full w-full rounded-xl bg-white'
									: 'h-full w-full rounded-xl bg-white'
						)}
						use:motion
					>
						{#if selected?.id === card.id}
							<div
								class="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl"
							>
								<Motion
									initial={{
										opacity: 0
									}}
									animate={{
										opacity: 0.6
									}}
									let:motion
								>
									<div use:motion class="absolute inset-0 z-10 h-full w-full bg-black opacity-100">
										<Motion
											layoutId={`content-${selected?.id}`}
											initial={{
												opacity: 0,
												y: 100
											}}
											animate={{
												opacity: 1,
												y: 0
											}}
											exit={{
												opacity: 0,
												y: 100
											}}
											transition={{
												duration: 0.3,
												ease: 'easeInOut'
											}}
											let:motion
										>
											<div use:motion class="relative top-8 z-[70] px-8 pb-4 md:top-36">
												{#if typeof selected?.content === 'string'}
													<p class="mt-3 text-2xl font-bold text-white">
														{selected?.content}
													</p>
												{:else}
													<svelte:component this={selected?.content} {...selected?.props} />
												{/if}
											</div>
										</Motion>
									</div>
								</Motion>
							</div>
							<!-- {:else} -->
						{/if}
						<Motion layoutId={`image-${card.id}-image`} let:motion>
							<img
								use:motion
								srcset={optimize(card.thumbnail)}
								alt="thumbnail"
								height="500"
								width="500"
								class={cn(
									'absolute inset-0 h-full w-full object-cover object-top  grayscale transition duration-200 hover:scale-105 hover:grayscale-0'
								)}
							/>
						</Motion>
					</div>
				</Motion>
			</div>
		{/each}
	</AnimateSharedLayout>
	<Motion animate={{ opacity: selected?.id ? 0.3 : 0 }} let:motion>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			use:motion
			on:click={handleOutsideClick}
			class={cn(
				'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
				selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
			)}
		></div>
	</Motion>
</div>
