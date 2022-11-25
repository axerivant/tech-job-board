<script lang="ts">
	let isFocused = false
</script>

<div
	class={`w-8/12 h-12 p-3 border bg-base-600 border-accent-300 rounded-sm flex justify-between items-center transition-all
    ${isFocused && 'brightness-[120%]'}`}
>
	<input
		on:focusin={() => (isFocused = true)}
		on:focusout={() => (isFocused = false)}
		class="bg-transparent w-full outline-none text-base-50 placeholder:text-base-300"
		type="text"
		placeholder="search by location, technologies, specialization or experience."
	/>
	<img class="h-6" src="/icons/search.svg" alt="" />
</div>
