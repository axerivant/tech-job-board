<script lang="ts">
	import { SavedPostings } from '@/features/saved-postings'
	import { SearchBox, SearchResults } from '@/features/search'
	import { Tabs } from '@/ui'

	let selectedView: 'search' | 'saved' = 'search'
	const changeSelectedView = (e: CustomEvent) => {
		selectedView = e.detail
	}
</script>

<main class="bg-base-700 min-h-screen flex flex-col gap-12 items-center p-12">
	<div class="w-6/12 max-w-[60rem] flex flex-col gap-6">
		<Tabs options={['search', 'saved']} current={selectedView} on:change={changeSelectedView} />
		<!-- search /-->
		{#if selectedView === 'search'}
			<SearchBox />
			<SearchResults />
		{/if}

		<!-- saved /-->
		{#if selectedView === 'saved'}
			<SavedPostings />
		{/if}
	</div>
</main>
