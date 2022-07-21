<script>
	import { isClientSide } from '$stores/global.js'
	import { isSideNavOpen } from '$stores/sidenav.js'
	import NavBtn from './NavBtn.svelte'
</script>

<header class="[ z-40 sticky top-0 ] [ h-header ] [ bg-gray-900 border-b border-white border-opacity-5 ]">
	<div class="container [ flex items-center justify-between ] [ h-full ]">

		<div class="[ flex items-center gap-2 ]">
			<!-- Open Mobile Menu -->
			<NavBtn class="toggle-SideNav" icon="bars" on:click={_=> $isSideNavOpen = !$isSideNavOpen} />

			<!-- Go To Client -->
			{#if !$isClientSide}
				<NavBtn icon="window" href="/" />
			{/if}

			<!-- Report Issue -->
			<NavBtn icon="bug" href="/issues" />
		</div>

		<div class="flex">
			<!-- User Avatar -->
			<NavBtn class="[ rounded-full overflow-hidden ] [ border-2 border-gray-700 ] [ active:active:scale-x-90 ]">
				<img src="https://i.pravatar.cc/64?img=3" alt="Your avatar" />
			</NavBtn>
		</div>

	</div>
</header>
