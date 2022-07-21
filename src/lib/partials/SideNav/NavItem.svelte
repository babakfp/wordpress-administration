<script>
	export let item
  import SubMenu from './SubMenu.svelte'
</script>

{#if item?.subItems && item.subItems.length > 0}
	<li class="NavItem | group md:relative">
		<div class="[ flex justify-between ] [ bg-white bg-opacity-5 rounded ]">

			<!-- Link -->
			<a class="[ flex items-center gap-3 ] [ w-full h-10 px-3 ] [ bg-white bg-opacity-0 rounded ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ md:justify-center md:w-9 md:h-9 md:px-0 lg:w-full lg:h-10 lg:justify-start lg:px-3 ] [ animate-clickable animate-clickable--left ]" href={item.href}>
				<i class="{item.icon} opacity-75"></i>
				<span class="text-sm [ md:hidden lg:block ]">{item.title}</span>
				<i class="[ fa-thin fa-angle-right ] !hidden text-xs opacity-50 ml-auto mr-1 lg:!flex"></i>
			</a>

			<!-- Toggle Dropdown -->
			<button class="NavItem__toggle-btn [ flex items-center justify-center ] [ w-10 min-w-10 h-10 ] [ bg-white bg-opacity-0 rounded ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ md:hidden ] [ animate-clickable animate-clickable--bottom-right ]">
				<i class="[ fa-thin fa-angle-down ] text-xs opacity-50"></i>
			</button>
		</div>

		<!-- Sub Items -->
		<SubMenu subItems={item?.subItems} />
	</li>
{:else}
	<li>
		<a class="[ flex items-center gap-3 ] [ w-full h-10 px-3 ] [ bg-white bg-opacity-5 rounded ] [ duration-150 hover:bg-opacity-10 hover:text-gray-200 ] [ md:justify-center md:w-9 md:h-9 md:px-0 lg:w-full lg:h-10 lg:justify-start lg:px-3 ]" href={item.href}>
			<i class="{item.icon} opacity-75"></i>
			<span class="text-sm md:hidden lg:block">{item.title}</span>
		</a>
	</li>
{/if}
