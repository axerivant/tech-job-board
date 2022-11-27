<script lang="ts">
	import { goto } from '$app/navigation'
	import { SkillsList, Title, Brief, Attribute, Action } from '.'

	export let result: SearchResult

	const { title, skills, brief, location, compensation, postingID, employer, isSaved } = result
</script>

<button
	on:click={() => goto(`/job/${postingID}`)}
	class="text-left flex gap-6 bg-base-600 p-8 border border-accent-300 hover:brightness-110 transition-all h-64"
>
	<div class="flex flex-col gap-6 w-9/12">
		<div class="flex flex-col gap-3">
			<div class="flex gap-3 items-center">
				<Title {title} />
				<p class="text-base-300 text-lg">{employer}</p>
			</div>
			<SkillsList {skills} />
		</div>
		<Brief {brief} />
	</div>
	<div class="w-3/12 flex flex-col justify-between items-end h-full">
		<div>
			<Attribute type="location" value={location} />
			<Attribute type="compensation" value={compensation} />
		</div>
		<div class="flex gap-3">
			{#if isSaved}
				<Action type="un-save" />
			{:else}
				<Action type="save" />
				<Action type="hide" />
			{/if}
		</div>
	</div>
</button>
