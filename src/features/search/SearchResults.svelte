<script lang="ts">
	import { Result } from './internal'

	const DummySearchResults: SearchResult[] = [
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: true
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		},
		{
			postingID: 'wdwe',
			employer: 'apple inc.',
			title: 'Front-End Developer',
			brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
			skills: ['svelte', 'react', 'ts'],
			location: 'vancouver',
			compensation: '45K+',
			isSaved: false
		}
	]
</script>

{#each DummySearchResults as result}
	<Result {result} />
{/each}
