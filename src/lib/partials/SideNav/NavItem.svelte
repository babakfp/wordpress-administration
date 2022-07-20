<script>
	import NavItemLabel from './NavItemLabel.svelte'

	export let item

	let showSubLinks = false
</script>

{#if item?.subItems && item?.subItems.length > 0}
	<li class="group md:relative">
		<div class="[ flex justify-between ] [ bg-white bg-opacity-5 rounded ]">

			<!-- Link -->
			<a class="[ flex items-center gap-3 ] [ w-full h-10 px-3 ] [ bg-white bg-opacity-0 rounded ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ md:justify-center md:w-9 md:h-9 md:px-0 lg:w-full lg:h-10 lg:justify-start lg:px-3 ]" href={item.href}>
				<i class="{item.icon} opacity-75"></i>
				<span class="text-sm [ md:hidden lg:block ]">{item.title}</span>
				<i class="[ fa-thin fa-angle-right ] !hidden text-xs opacity-50 ml-auto mr-1 lg:!flex"></i>
			</a>

			<!-- Toggle Dropdown -->
			<button class="[ flex items-center justify-center ] [ w-10 min-w-10 h-10 ] [ bg-white bg-opacity-0 rounded ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ md:hidden ]"
				on:click={_=> showSubLinks = !showSubLinks}>
				<i class="[ fa-thin fa-angle-down ] text-xs opacity-50"></i>
			</button>
		</div>

		<!-- Sub Links -->
		<div class="[ hidden {showSubLinks && '!block'} md:block md:absolute md:pl-2 top-0 left-full ] [ md:invisible md:opacity-0 md:pointer-events-none | md:group-hover:visible md:group-hover:opacity-100 md:group-hover:pointer-events-auto | md:duration-300 md:ease-in-out ]">
			<div class="my-2 [ bg-white bg-opacity-5 rounded ] [ md:w-48 md:bg-gradient-to-r md:from-gray-800 md:to-gray-900 md:shadow-xl md:shadow-gray-800 ]">
				<ul>
					{#each item?.subItems as subItem}
						<li class="sublink-item">
							<a class="flex items-center gap-2 px-4 py-2 [ text-sm text-gray-400 ] [ duration-150 hover:text-gray-200 ]" href={subItem.href}>
	
								<!-- Title -->
								<span>{subItem.title}</span>
	
								<!-- Label -->
								{#if subItem?.label}
									<NavItemLabel label={subItem.label} />
								{/if}
	
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</li>
{:else}
	<li>
		<a class="[ flex items-center gap-3 ] [ w-full h-10 px-3 ] [ bg-white bg-opacity-5 rounded ] [ duration-150 hover:bg-opacity-10 hover:text-gray-200 ] [ md:justify-center md:w-9 md:h-9 md:px-0 lg:w-full lg:h-10 lg:justify-start lg:px-3 ]" href={item.href}>
			<i class="{item.icon} opacity-75"></i>
			<span class="text-sm md:hidden lg:block">{item.title}</span>
		</a>
	</li>
{/if}

<style lang="postcss">
	.sublink-item:first-child a {
		@apply pt-3;
	}
	.sublink-item:last-child a {
		@apply pb-3;
	}
</style>
