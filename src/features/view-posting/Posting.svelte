<script lang="ts">
	import { SkillsList, Title, Description, Action } from './internal'

	const PostingData = {
		postingID: 'wdwe',
		title: 'Front-End Developer',
		brief: 'Lorem ipsum dolor sit amet consectetur. Nunc morbi feugiat enim erat ornare scelerisque. Nisl lectus adipiscing arcu aliquet vitae in tortor luctus. Massa adipiscing semper suspendisse penatibus a mattis lacinia. ',
		description: `Lorem ipsum dolor sit amet consectetur. 

Leo ultrices ac egestas ut volutpat eu ultrices sagittis elementum. Quam euismod quam est metus senectus lectus. Lacus iaculis massa at pulvinar non tellus. Elementum sed ante ultricies sociis interdum tristique scelerisque. Quis scelerisque cras tristique justo nibh ornare. 
s
Tincidunt dignissim ut fusce eu lacinia tempus quis tellus. Tellus dignissim rutrum semper sagittis eget amet.
Duis dictum dui leo in cursus urna ut. Id blandit viverra neque tortor. 
Adipiscing lorem sed tellus faucibus. Cras orci molestie rhoncus quam sapien tempus vivamus. Pretium arcu lorem vulputate dictum adipiscing tortor faucibus 
Neque faucibus aliquet condimentum sed sed porttitor. Ultrices massa tristique risus praesent 
At mi amet fringilla dignissim dolor in. Sed vel phasellus magna vitae venenatis nunc. Ut ut id nec risus massa. Congue tincidunt sit eget scelerisque nunc sit volutpat eget cursus.
 Porta volutpat tempus amet orci massa neque hac. Ornare egestas nulla nunc vitae purus viverra. Facilisis vel justo dui ornare pellentesque venenatis. Donec sagittis feugiat nullam ut.

Mus purus sem euismod vulputate massa viverra posuere lectus aliquet. Id aenean vitae molestie id lectus. Dictum auctor non cras sollicitudin pharetra. Tempor varius non sem id interdum. Pretium nisl adipiscing metus senectus integer nunc odio mauris. Nisl augue elit ac faucibus. Amet pellentesque a erat curabitur fermentum aliquet. Mauris faucibus vitae quis dictumst tristique. Auctor egestas mattis sed sit et risus mi ut. Mattis at elementum est aliquam. Diam ante pharetra tempor orci volutpat sit aenean mauris. Egestas massa integer ultricies velit. Interdum blandit elit nibh diam gravida commodo.

Donec magnis cursus semper purus arcu nibh odio. Sit viverra sed at nisi tincidunt. Luctus arcu aliquam fames libero nisi vel. Sed sit nunc phasellus aliquet mi integer dapibus dolor. Ut diam sed ultrices faucibus eu ut. Morbi turpis suspendisse sem elit at turpis velit. Odio magna blandit tristique vivamus eget purus sit. Pellentesque interdum aliquet amet mollis. Ultrices tincidunt feugiat nullam in pellentesque eu porta convallis. Feugiat tempor sit fringilla quis. Nunc fusce cras vitae nunc sodales a lacus. Suspendisse elementum sed commodo est praesent sit aliquam tincidunt laoreet. Nibh eleifend sed sagittis dignissim sit rutrum. Eget suspendisse sem lacus odio nullam ornare.

Blandit vitae laoreet elementum lectus ornare. Mattis maecenas morbi maecenas imperdiet tristique. Ac neque dictum ipsum lacus nulla nibh. Est amet nulla in consectetur. Dui vestibulum arcu id congue. Massa eget neque sit tortor at. Ipsum integer lectus risus phasellus dictum. Diam proin eget eget commodo sit nullam sapien in sit. Massa phasellus nibh leo sed sagittis. Non dignissim nisi tortor vulputate aenean. Posuere eleifend id massa mauris tristique nulla at nunc viverra. Orci praesent ut posuere adipiscing ullamcorper amet morbi. Mauris quisque amet in facilisi velit in libero tristique.
Egestas id id odio dolor aliquam sit tempus pretium. Feugiat laoreet orci tincidunt duis. Sit sit leo diam parturient pulvinar pretium eget orci fringilla. Dui pellentesque sit potenti auctor tortor justo et lorem. Quam nunc mauris id pharetra urna duis adipiscing pellentesque. Eget est aliquet libero diam vitae. Varius elit odio turpis fames aliquam. Arcu convallis volutpat consequat in aliquam elementum eu. Massa velit quisque amet eget.
Sit enim gravida in turpis sit. Nec duis vitae volutpat ac placerat cum convallis. Lacus tempor sit magna aenean a tempor quis viverra ut. Lorem mauris quam viverra nam ultrices habitasse nunc. Urna amet vel sed urna volutpat turpis.`,
		skills: ['svelte', 'react', 'ts'],
		location: 'vancouver',
		compensation: '45K+'
	}

	const { title, skills, location, compensation, description } = PostingData
</script>

<div class="flex w-8/12 gap-6">
	<div class="flex flex-col gap-4 w-8/12">
		<Title {title} />
		<SkillsList {skills} />
		<div class="mt-6">
			<Description {description} />
		</div>
	</div>
	<div class="w-4/12 flex justify-end h-fit sticky top-12">
		<Action applyLink="#" {location} {compensation} />
	</div>
</div>
