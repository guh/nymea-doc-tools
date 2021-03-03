<script lang="ts">
  import { route, url } from '@sveltech/routify';
  import { menuItems } from './_store';
  import MenuItems from './MenuItems.svelte';
  import Filter from '../filter/Filter.svelte';

  // export let level = 0;
  export let current = undefined;
  export let orderedLinks = [];
  export let children = [];

  let mainMenu;
  let visible: boolean = false;
  let menuOpen = false;

  $: resource = ($route as any)?.path?.includes('/documentation/resources');

  function handleMenuToggle() {
    document.body.classList.toggle('noscroll');
  }

  function toggle() {
    visible = !visible;
  }

  function setMainMenu() {
  }
</script>

<style>
  :root {
    --sub-menu-border-color: var(--silver-darken-10);
  }

  h2 {
    align-items: center;
    color: var(--grey-base);
    display: none;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5rem;
    text-transform: uppercase;
  }

  h2 > :global(ion-icon) {
    height: 1.125rem;
    margin-right: var(--space-04);
    width: 1.125rem;
  }

  .menu {
    padding: calc(var(--space-10) + var(--space-07)) var(--space-09) 0;
  }

  @media only screen and (min-width: 60em) {
    h2 {
      display: flex;
    }
    
    .menu {
      padding: calc(var(--space-10) + var(--space-07)) calc(var(--space-09));
    }
  }
</style>

<div class="menu">
  <h2>
    <ion-icon name="menu"></ion-icon>
    Navigation
  </h2>
  <MenuItems items={$menuItems} />
</div>
