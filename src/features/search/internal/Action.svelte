<script lang="ts">
	export let type: 'save' | 'hide'
</script>

<button
	class="flex justify-center items-center hover:bg-accent-300 w-fit p-3 rounded transition-all"
>
	<img class="h-5" src={type === 'save' ? '/icons/plus.svg' : '/icons/hide.svg'} alt="" />
</button>
