<script>
  export let subItems
	import NavItemLabel from './NavItemLabel.svelte'
  
  let SubMenu
  $: if (SubMenu && window.innerWidth >= 640) {
    let bounding = SubMenu.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      // Element is in the viewport!
    } else {
      // Element is NOT in the viewport!
      SubMenu.classList.add('SubMenu--bottom')
    }
  }
</script>

<div bind:this={SubMenu} class="
  NavItem__SubMenu
  [ overflow-hidden h-0 duration-300 ease-in ]
  [ sm:h-auto | sm:absolute sm:pl-2 sm:top-0 sm:left-full ]
  [ sm:invisible sm:opacity-0 sm:pointer-events-none sm:-translate-x-2 | sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:group-hover:-translate-x-0 | sm:duration-150 sm:ease-in | sm:overflow-unset ]
">
  <div class="[ my-2 | bg-white bg-opacity-5 rounded ] [ sm:w-48 sm:my-0 sm:bg-gray-800 sm:shadow-xl sm:shadow-black/50 ] [ lg:my-0 ]">
    <ul>
      {#each subItems as subItem}
        <li class="SubMenu-item">
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
  .NavItem__SubMenu:global(.SubMenu--bottom) {
    @apply sm:top-auto sm:bottom-0;
  }
  .NavItem__SubMenu:global(.SubMenu--bottom) > div::before {
    @apply sm:top-auto sm:bottom-4;
  }

  @screen sm {
    .NavItem__SubMenu > div::before {
      @apply absolute top-4 right-full translate-x-2;
      content: "";
      width: 0; 
      height: 0; 
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent; 
      border-right: 4px solid theme('colors.gray.800'); 
    }
  }
  :global(.NavItem--show) .NavItem__SubMenu {
    @apply !h-auto;
  }
  .SubMenu-item:first-child a { @apply pt-4 }
	.SubMenu-item:last-child a  { @apply pb-4 }
</style>
