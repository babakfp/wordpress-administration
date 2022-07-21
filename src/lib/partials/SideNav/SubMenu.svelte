<script>
  export let subItems
	import NavItemLabel from './NavItemLabel.svelte'
</script>

<div class="NavItem__SubMenu [ overflow-hidden h-0 duration-300 ease-in ] [ md:h-auto md:absolute md:pl-2 top-0 left-full ] [ md:invisible md:opacity-0 md:pointer-events-none | md:group-hover:visible md:group-hover:opacity-100 md:group-hover:pointer-events-auto | md:duration-300 md:ease-in-out ]">
  <div class="my-2 [ bg-white bg-opacity-5 rounded ] [ md:w-48 md:bg-gradient-to-r md:from-gray-800 md:to-gray-900 md:shadow-xl md:shadow-gray-800 ]">
    <ul>
      {#each subItems as subItem}
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

<style lang="postcss">
  .sublink-item:first-child a {
		@apply pt-3;
	}
	.sublink-item:last-child a {
		@apply pb-3;
	}
  :global(.NavItem--show) .NavItem__SubMenu {
    @apply !h-auto;
  }
</style>
