<script>
  import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { navigating } from "$app/stores"
	import OutClick from 'svelte-outclick'
	import { sideNavItems, isSideNavOpen } from '$stores/sidenav.js'
	import NavItem from './NavItem.svelte'

	$: $navigating && ($isSideNavOpen = false)

  onMount(() => {
    const NavItems = document.querySelectorAll('.NavItem')
    NavItems.forEach(navItem => {
      const toggleBtn = navItem.querySelector('.NavItem__toggle-btn')
      toggleBtn.addEventListener('click', () => {
        navItem.classList.toggle('NavItem--show')
        NavItems.forEach(navItem2 => navItem !== navItem2 && navItem2.classList.remove('NavItem--show'))
      })
    })
  })
</script>

<sidebar class="[ z-50 ] [ fixed inset-0 top-header ] [ md:static md:inset-auto md:h-vh ]">
	<div class="[ absolute inset-0 ] [ bg-gray-900 bg-opacity-60 ] [ duration-200 ease-in-out ] [ invisible opacity-0 pointer-events-none ] {$isSideNavOpen && '[ !visible !opacity-100 !pointer-events-auto ]'} [ md:hidden ] [ md:visible md:opacity-100 md:pointer-events-auto ]"></div>
	<OutClick
		class="w-64 h-full [ bg-gray-900 ] [ duration-200 ease-in-out ] -translate-x-full {$isSideNavOpen && '!translate-x-0'} [ md:w-auto md:translate-x-0 lg:w-64 ]"
		on:outclick={_=> $isSideNavOpen = false} excludeByQuerySelector={['.toggle-SideNav']}
	>
		<!-- <div class="overflow-y-auto max-h-full pt-4 pb-6 md:overflow-x-unset"> -->
		<div class="overflow-y-overlay overflow-x-hidden h-full pt-4 pb-6 border-r border-white-5">

			{#if $sideNavItems && $sideNavItems.length > 0}
				<nav>
					<ul class="grid gap-2 px-4">
						{#each $sideNavItems as item}
							<NavItem {item} />
						{/each}
					</ul>
				</nav>
			{/if}

		</div>
	</OutClick>
</sidebar>
