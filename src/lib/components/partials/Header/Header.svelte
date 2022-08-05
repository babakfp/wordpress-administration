<script>
	import { isClientSide } from '$stores/global.js'
	import { isSideNavOpen } from '$stores/sidenav.js'
	import HeaderBtn from './HeaderBtn.svelte'
</script>

<header class="[ z-40 sticky top-0 ] [ h-header ] [ bg-gray-900 border-b border-white border-opacity-5 ]">
	<div class="container [ flex items-center justify-between ] [ h-full ]">

		<div class="[ flex items-center gap-2 ]">
			<!-- Open Mobile Menu -->
			<HeaderBtn class="SideNav__toggle sm:hidden" icon="bars" on:click={_=> $isSideNavOpen = !$isSideNavOpen} />

			<!-- Go To Client -->
			{#if !$isClientSide}
				<HeaderBtn icon="window" href="/" />
			{/if}

			<!-- Report Issue -->
			<HeaderBtn icon="bug" href="/issues" />
		</div>

		<div class="flex">
			<!-- User Avatar -->
			<HeaderBtn class="[ rounded-full overflow-hidden ] [ border-2 border-gray-700 ] [ active:active:scale-x-90 ]">
				<img src="/avatar.jpg" alt="Your avatar" />
			</HeaderBtn>
		</div>

	</div>
</header>
