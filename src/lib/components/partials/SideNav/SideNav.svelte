<script>
  import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { navigating } from "$app/stores"
	import OutClick from 'svelte-outclick'
	import { sideNavItems, isSideNavOpen } from '$stores/sidenav.js'
	import Item from './Item.svelte'
  import { browser } from '$app/env'

	$: $navigating && ($isSideNavOpen = false)

  $: if (browser) {
    const NavItems = document.querySelectorAll('.SideNav__Item')
    NavItems.forEach(navItem => {
      const toggleBtn = navItem.querySelector('.SideNav__Item-toggle')
      toggleBtn.addEventListener('click', () => {
        navItem.classList.toggle('SideNav__Item--show')
        NavItems.forEach(navItem2 => navItem !== navItem2 && navItem2.classList.remove('SideNav__Item--show'))
      })
    })
  }
</script>

<sidebar class="[ z-50 ] [ fixed inset-0 top-header h-vh ] [ sm:z-0 sm:sticky sm:inset-auto sm:top-header ]">
	<div class="[ absolute inset-0 ] [ bg-gray-900 bg-opacity-60 ] [ duration-200 ease-in-out ] [ invisible opacity-0 pointer-events-none ] {$isSideNavOpen && '[ !visible !opacity-100 !pointer-events-auto ]'} [ sm:hidden ] [ sm:visible sm:opacity-100 sm:pointer-events-auto ]"></div>
	<OutClick
		class="w-64 h-full | bg-gray-900 | -translate-x-full | duration-200 ease-in-out {$isSideNavOpen && '!translate-x-0'} [ sm:w-[4.25rem] sm:translate-x-0 ] [ lg:w-56 ]"
		on:outclick={_=> $isSideNavOpen = false} excludeByQuerySelector={['.SideNav__toggle']}
	>
		<!-- <div class="overflow-y-overlay overflow-x-hidden h-full pt-4 pb-6 border-r border-white border-opacity-5"> -->
		<div class="h-full pt-4 pb-6 border-r border-white border-opacity-5">

			{#if $sideNavItems && $sideNavItems.length > 0}
				<nav>
					<ul class="grid gap-2 px-4">
						{#each $sideNavItems as item}
							<Item {item} />
						{/each}
					</ul>
				</nav>
			{/if}

		</div>
	</OutClick>
</sidebar>
