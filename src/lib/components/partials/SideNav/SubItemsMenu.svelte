<script>
	export let subItems
	import ItemLabel from './ItemLabel.svelte'
</script>

<div class="
  NavItem__SubMenu
  [ overflow-hidden h-0 duration-300 ease-in ]
  [ sm:h-auto | sm:absolute sm:pl-2 sm:top-0 sm:left-full ]
  [ sm:invisible sm:opacity-0 sm:pointer-events-none sm:-translate-x-2 | sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:group-hover:-translate-x-0 | sm:duration-150 sm:ease-in | sm:overflow-unset ]
">
  <div class="[ my-2 | bg-white/5 rounded ] [ sm:w-48 sm:my-0 sm:bg-gray-800 sm:shadow-xl sm:shadow-black/50 ] [ lg:my-0 ]">
    <ul>
      {#each subItems as subItem}
        <li class="SubItemsMenu-item">
          <a class="flex items-center gap-2 px-4 py-2 [ text-sm text-gray-400 ] [ duration-150 hover:text-gray-200 ]" href={subItem.href}>

            <span>{subItem.title}</span>

            {#if subItem?.label}
              <ItemLabel label={subItem.label} />
            {/if}

          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss">
  .NavItem__SubMenu:global(.SubItemsMenu--bottom) {
    @apply sm:top-auto sm:bottom-0;
  }
  .NavItem__SubMenu:global(.SubItemsMenu--bottom) > div::before {
    @apply sm:top-auto sm:bottom-4;
  }

  @screen sm {
    .NavItem__SubMenu > div::before {
      @apply absolute top-4 right-full translate-x-2;
			@apply border-y-4 border-r-4 border-r-gray-800 w-0 h-0 border-transparent;
			content: "";
    }
  }
  :global(.SideNav__Item--show) .NavItem__SubMenu {
    @apply !h-auto;
  }
  .SubItemsMenu-item:first-child a { @apply pt-4 }
	.SubItemsMenu-item:last-child a  { @apply pb-4 }
</style>
