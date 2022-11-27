<script lang="ts">
	import { TextButton } from '@/ui'
	import { Attribute } from '.'

	export let location: string
	export let compensation: string
	export let applyLink: string
</script>

<div class="bg-accent-300 w-fit p-6 flex flex-col gap-3 pt-5 rounded-sm">
	<Attribute type="location" value={location} />
	<Attribute type="compensation" value={compensation} />
	<TextButton label="apply on company site" />
</div>
