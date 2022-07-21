<script>
	export let item
  import SubMenu from './SubMenu.svelte'
</script>

{#if item?.subItems && item.subItems.length > 0}
	<li class="NavItem | group sm:relative">
		<div class="[ flex justify-between ] [ bg-white bg-opacity-5 rounded ] [ sm:bg-opacity-0 ] [ lg:sm:bg-opacity-5 ]">

			<!-- Link -->
			<a class="[ flex items-center gap-3 ] [ w-full h-10 px-3 ] [ bg-white bg-opacity-0 rounded ] [ animate-click origin-left ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ sm:justify-center sm:w-9 sm:h-9 sm:px-0 | sm:bg-opacity-5 sm:hover:bg-opacity-10 | sm:origin-bottom sm:active:scale-x-110 ] [ lg:w-full lg:h-10 lg:justify-start lg:px-3 | lg:bg-opacity-0 lg:hover:bg-opacity-5 | lg:origin-left lg:active:scale-x-90 ]" href={item.href}>
				<i class="{item.icon} opacity-75"></i>
				<span class="text-sm [ sm:hidden lg:block ]">{item.title}</span>
				<i class="[ fa-thin fa-angle-right ] !hidden text-xs opacity-50 ml-auto mr-1 lg:!flex"></i>
			</a>

			<!-- Toggle Dropdown -->
			<button class="NavItem__toggle-btn [ flex items-center justify-center ] [ w-10 min-w-10 h-10 ] [ bg-white bg-opacity-0 rounded ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ sm:hidden ] [ animate-click origin-bottom-right ]">
				<i class="[ fa-thin fa-angle-down ] text-xs opacity-50"></i>
			</button>
		</div>

		<!-- Sub Items -->
		<SubMenu subItems={item?.subItems} />
	</li>
{:else}
	<li class="[ bg-white bg-opacity-5 rounded ] [ sm:bg-opacity-0 ] [ lg:sm:bg-opacity-5 ]">
		<a class="[ flex items-center gap-3 ] [ w-full h-10 px-3 ] [ bg-white bg-opacity-0 rounded ] [ animate-click origin-left ] [ duration-150 hover:bg-opacity-5 hover:text-gray-200 ] [ sm:justify-center sm:w-9 sm:h-9 sm:px-0 | sm:bg-opacity-5 sm:hover:bg-opacity-10 | sm:origin-bottom sm:active:scale-x-110 ] [ lg:w-full lg:h-10 lg:justify-start lg:px-3 lg:bg-opacity-0 lg:hover:bg-opacity-5 | lg:origin-left lg:active:scale-x-90 ]" href={item.href}>
			<i class="{item.icon} opacity-75"></i>
			<span class="text-sm sm:hidden lg:block">{item.title}</span>
		</a>
	</li>
{/if}
