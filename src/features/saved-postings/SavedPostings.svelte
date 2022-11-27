<script lang="ts">
	import { goto } from '$app/navigation'

	const DummyPostings: SearchResult[] = [
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+'
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+'
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+'
		}
	]
</script>

<div class=" flex flex-col gap-3">
	{#each DummyPostings as { title, employer }}
		<div
			on:click={() => goto('/job/test')}
			class="bg-base-600 p-6 border border-accent-300 rounded-sm hover:brightness-110 transition-all cursor-pointer"
		>
			<p class="text-xl font-semibold text-accent-100">{title}</p>
			<p class="text-base-300 text-lg">{employer}</p>
		</div>
	{/each}
</div>
