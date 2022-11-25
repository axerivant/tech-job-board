<script lang="ts">
	import { SearchBox, SearchResults } from '@/features/search'
</script>

<!-- homepage (search) /-->
<main class="bg-base-700 min-h-screen flex flex-col gap-12 items-center p-12">
	<div class="w-6/12 max-w-[60rem] flex flex-col gap-6">
		<SearchBox />
		<SearchResults />
	</div>
</main>
