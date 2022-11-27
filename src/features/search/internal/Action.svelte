<script lang="ts">
	export let type: 'save' | 'hide' | 'un-save'
</script>

{#if type === 'save' || type === 'hide'}
	<button
		class="flex justify-center items-center hover:bg-accent-300 w-fit p-3 rounded transition-all"
	>
		<img class="h-5" src={type === 'save' ? '/icons/plus.svg' : '/icons/hide.svg'} alt="" />
	</button>
{/if}

{#if type === 'un-save'}
	<button
		class="flex justify-center items-center bg-green-300 brightness-50 w-fit p-3 rounded transition-all"
	>
		<img class="h-5" src="/icons/plus-dark.svg" alt="" />
	</button>
{/if}
