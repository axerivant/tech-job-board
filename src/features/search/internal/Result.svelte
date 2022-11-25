<script lang="ts">
	import { SkillsList, Title, Brief, Attribute, Action } from '.'

	export let result: SearchResult

	const { title, skills, brief, location, compensation } = result
</script>

<button
	class="text-left flex gap-6 bg-base-600 p-8 border border-accent-300 hover:brightness-110 transition-all"
>
	<div class="flex flex-col gap-6 w-9/12">
		<div class="flex flex-col gap-3">
			<Title {title} />
			<SkillsList {skills} />
		</div>
		<Brief {brief} />
	</div>
	<div class="w-3/12 flex flex-col gap-3 justify-between items-end">
		<div>
			<Attribute type="location" value={location} />
			<Attribute type="compensation" value={compensation} />
		</div>
		<div class="flex gap-3">
			<Action type="save" />
			<Action type="hide" />
		</div>
	</div>
</button>
