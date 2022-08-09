<script>
	const posttypeItems = [
		{
			title: 'All',
			href: '/posts/all',
			count: 46,
			isActive: true,
		},
		{
			title: 'Published',
			href: '/posts/published',
			count: 40,
		},
		{
			title: 'Draft',
			href: '/posts/draft',
			count: 4,
		},
		{
			title: 'Trash',
			href: '/posts/trash',
			count: 2,
		},
	]
</script>

<nav class="overflow-x-overlay -mt-4 -ml-4">
	<ol class="flex text-sm">
		{#each posttypeItems as item}
			<li class:is-active={item.isActive} class="whitespace-nowrap">
				<a class="flex gap-1 py-4 px-3" href={item.href}>
					<div>
						<span class="{item.isActive && 'font-semibold'}">{item.title}</span>
						<span class="text-gray-500">(<span class="text-gray-300">{item.count}</span>)</span>
					</div>
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style lang="postcss">
	li:first-child a {
		@apply pl-4;
	}
	li:last-child a {
		@apply pr-4;
	}
	.is-active div {
		@apply relative -my-2 py-1 px-2 rounded border-2 border-brand;
		
		&:after {
			@apply absolute top-full translate-y-px right-1/2 translate-x-1/2;
			@apply border-x-4 border-t-4 border-t-brand w-0 h-0 border-transparent;
			content: "";
		}
	}
</style>
