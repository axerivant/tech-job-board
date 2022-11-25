<script lang="ts">
	export let type: 'location' | 'compensation'
	export let value: string
</script>

<div class="flex w-full p-2 rounded-sm text-base-50 text-lg gap-3 items-center">
	<img
		class="h-6"
		src={type === 'compensation' ? '/icons/location.svg' : '/icons/dollar.svg'}
		alt=""
	/>
	<p>{value}</p>
</div>
