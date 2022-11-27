<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let options: string[]
	export let current: string

	const dispatch = createEventDispatcher()
	const emmitChange = (to: string) => {
		dispatch('change', to)
	}
</script>

<div class="rounded-full bg-accent-300 p-1 h-10 flex gap-1 w-48">
	{#each options as tab}
		<button
			on:click={() => emmitChange(tab)}
			class="{current === tab
				? 'bg-accent-100'
				: 'text-accent-100'}  flex justify-center items-center rounded-full px-3 w-24 h-full"
			>{tab}</button
		>
	{/each}
</div>
