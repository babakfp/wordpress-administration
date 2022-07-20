<script>
	let className = ''
	export { className as class }

	export let icon = null
	export let href = null
</script>

{#if href}
	<a class="{className} btn w-9 h-9 p-0 | bg-white-5" {href}>
		<i class="fa-thin fa-{icon} | opacity-75"></i>
	</a>
{:else}
	<button class="{className} btn w-9 h-9 p-0 | bg-white-5" on:click>
		{#if icon}
			<i class="fa-thin fa-{icon} | opacity-75"></i>
		{/if}
		<slot />
	</button>
{/if}
