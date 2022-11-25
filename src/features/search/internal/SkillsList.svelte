<script lang="ts">
	export let skills: string[]
</script>

<div class="flex gap-3">
	{#each skills as skill}
		<p
			class="bg-accent-100 p-3 py-0 pb-[0.1rem] rounded-full flex items-center justify-center text-base-700 font-semibold uppercase"
		>
			{skill}
		</p>
	{/each}
</div>
