<script>
  export let subItems
	import NavItemLabel from './NavItemLabel.svelte'
</script>

<div class="
  NavItem__SubMenu
  [ overflow-hidden h-0 duration-300 ease-in ]
  [ sm:h-auto | sm:absolute sm:pl-2 sm:top-0 sm:left-full ]
  [ sm:invisible sm:opacity-0 sm:pointer-events-none sm:-translate-x-2 | sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:group-hover:-translate-x-0 | sm:duration-150 sm:ease-in ]
">
  <div class="[ my-2 | bg-white bg-opacity-5 rounded ] [ sm:w-48 sm:my-0 sm:bg-gray-800 sm:drop-shadow-2xl ] [ lg:my-0 ]">
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
		@apply pt-4;
	}
	.sublink-item:last-child a {
		@apply pb-4;
	}
  :global(.NavItem--show) .NavItem__SubMenu {
    @apply !h-auto;
  }
</style>
