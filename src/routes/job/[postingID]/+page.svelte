<script>
	import { Posting } from '@/features/view-posting'
	import { page } from '$app/stores'
	let postingID = $page.params.postingID
</script>

<main class="bg-base-700 min-h-screen flex justify-center p-12">
	<Posting {postingID} />
</main>
