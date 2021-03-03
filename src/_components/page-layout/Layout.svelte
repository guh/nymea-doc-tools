<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { afterPageLoad, beforeUrlChange } from '@sveltech/routify';

  let footer;
  let footerTop = 0;
  let show = 'content';
  let y;
  let wh;
  let stickySidebar = false;
  let stickyToolbar = false;
  let stickyOffset = 0;

  $: (y, wh, updateSticky());

  onMount(() => {
    footer = document.querySelector('[slot="footer"]');
  });

  afterUpdate(() => {
    footer = document.querySelector('[slot="footer"]');
    updateSticky();
  });

  $afterPageLoad(() => {
    updateSticky();
  });

  $beforeUrlChange(() => {
    document.querySelector('body').classList.remove('noscroll-sidebar-one', 'noscroll-sidebar-two');
    show = 'content';
    return true;
  });

  function updateSticky() {
    if (footer) {
      footerTop = footer.getBoundingClientRect().top;
      stickySidebar = footerTop < wh;
      stickyToolbar = stickySidebar;
      stickyOffset = -1 * (wh - footerTop);
    }
  }

  function showNavigation() {
    toggleNoScroll('noscroll-sidebar-one');
    show = show === 'navigation' ? 'content' : 'navigation';
  }

  function showContents() {
    toggleNoScroll('noscroll-sidebar-two');
    show = show === 'table-of-contents' ? 'content' : 'table-of-contents';
  }

  function toggleNoScroll(className) {
    document.querySelector('body').classList.toggle(className);
  }
</script>

<style>
  :root {
    --layout-sidebar-one-width: 65%;
    --layout-content-width-value: 100;
    --layout-content-width: calc(1% * var(--layout-content-width-value));
    --layout-header-width: var(--layout-content-width);
    --layout-sidebar-two-width-value: 65;
    --layout-sidebar-two-width: calc(1% * var(--layout-sidebar-two-width-value));
    --layout-buttons-background: var(--white-transparent);
  }

  .layout.wrapper {
    display: flex;
    position: relative;
  }

  .layout.wrapper > :global([slot="header"] .header-wrapper) {
    transition: transform 0.2s ease, opacity 0.4s ease;
  }

  .layout.wrapper.navigation > :global([slot=header] .header-wrapper) {
    transform: translateX(var(--layout-sidebar-one-width));
  }

  .layout.wrapper.table-of-contents > :global([slot=header] .header-wrapper) {
    transform: translateX(calc(-1% * (100 / var(--layout-content-width-value) * var(--layout-sidebar-two-width-value))));
  }

  .layout.wrapper > :global([slot="sidebar-one"]),
  .layout.wrapper > :global([slot="sidebar-two"]) {
    flex-basis: 0%;
    flex-grow: 0;
  }

  .layout.wrapper > :global([slot="sidebar-one"]) {
    --sidebar-width: var(--layout-sidebar-one-width);
    width: var(--layout-sidebar-one-width);
  }

  .layout.wrapper > :global([slot="sidebar-two"]) {
    --sidebar-width: var(--layout-sidebar-two-width);
    width: var(--layout-sidebar-two-width);
  }

  .layout.wrapper > :global([slot="sidebar-one"] .sidebar),
  .layout.wrapper > :global([slot="sidebar-two"] .sidebar) {
    position: fixed;
    top: 0;
    z-index: 0;
  }

  .layout.wrapper.sticky-sidebar > :global([slot="sidebar-one"] .sidebar),
  .layout.wrapper.sticky-sidebar > :global([slot="sidebar-two"] .sidebar) {
    transform: translateY(var(--offset));
  }

  .layout.wrapper > :global([slot="sidebar-one"] .sidebar) {
    left: 0;
  }

  .layout.wrapper > :global([slot="sidebar-two"] .sidebar) {
    right: 0;
  }

  .layout.main-wrapper {
    width: 100%;
  }

  .layout.main {
    flex-basis: 100%;
    flex-grow: 1;
    min-width: 0;
    position: relative;
    z-index: 2;
  }

  .layout.main-wrapper > :global([slot="content"]) {
    background-color: #fff;
    padding-top: var(--header-height);
  }

  .layout.wrapper .layout.main {
    transition: transform 0.2s ease, opacity 0.4s ease;
  }

  .layout.wrapper.content > :global([slot="sidebar-one"]),
  .layout.wrapper.content > :global([slot="sidebar-two"]) {
    display: none;
  }

  .layout.wrapper.navigation > :global([slot="sidebar-one"]),
  .layout.wrapper.table-of-contents > :global([slot="sidebar-two"]) {
    position: relative;
  }

  .layout.wrapper.navigation .layout.main {
    transform: translateX(var(--layout-sidebar-one-width));
  }

  .layout.wrapper.navigation .layout.main :global(.content) {
    opacity: 0.3;
  }

  .layout.wrapper.navigation > :global([slot="sidebar-one"]) {
    opacity: 1;
    z-index: 1;
  }

  .layout.wrapper.navigation > :global([slot="sidebar-two"]) {
    opacity: 0;
    z-index: 0;
  }

  .layout.wrapper.table-of-contents .layout.main {
    transform: translateX(calc(-1% * (100 / var(--layout-content-width-value) * var(--layout-sidebar-two-width-value))));
  }

  .layout.wrapper.table-of-contents > :global([slot="header"] header) {
    position: absolute;
  }

  .layout.wrapper.table-of-contents .layout.main :global(.content) {
    opacity: 0.3;
  }

  .layout.wrapper.table-of-contents > :global([slot="sidebar-one"]) {
    opacity: 0;
    z-index: 0;
  }

  .layout.wrapper.table-of-contents > :global([slot="sidebar-two"]) {
    opacity: 1;
    z-index: 1;
  }

  .buttons.group {
    /* background: transparent; */
    /* background: var(--layout-buttons-background); */
    background: rgba(255, 255, 255, 0.9);
            backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    /* border-bottom: 1px solid var(--header-border-color); */
    border-left: 1px solid var(--header-border-color);
    border-right: 1px solid var(--header-border-color);
    border-top: 1px solid var(--header-border-color);
    position: fixed;
    bottom: 0;
    /* left: -1px;
    right: -1px; */
    /* top: var(--header-height); */
    width: 100%;
    z-index: 3;
  }

  .layout.wrapper .buttons.group  {
    transform: translateX(0);
    transition: transform 0.2s ease;
  }

  .layout.wrapper.content .buttons.group {
    /* transform: translateX(0); */
  }

  .layout.wrapper.navigation .buttons.group {
    transform: translateX(var(--layout-sidebar-one-width));
  }

  .layout.wrapper.table-of-contents .buttons.group {
    transform: translateX(calc(-1% * (100 / var(--layout-content-width-value) * var(--layout-sidebar-two-width-value))));
  }

  .layout.wrapper.sticky-sidebar .buttons.group {
    position: absolute;
  }

  .buttons.wrapper {
    align-items: center;
    display: flex;
    height: var(--header-height);
    margin: 0 auto;
    padding: 0 var(--space-09);
    width: min(calc(65ch + 2 * var(--space-09)), 100%);
  }

  .buttons.wrapper button {
    align-items: center;
    appearance: none;
    background: transparent;
    /* background: rgba(10, 10, 10, 0.9);
            backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px); */
    border: 0;
    /* border-radius: var(--space-07); */
    color: var(--grey-base);
    /* color: var(--white); */
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5rem;
    margin: 0;
    /* padding: 0; */
    /* padding: var(--space-04) var(--space-07); */
    /* padding: var(--space-04); */
    text-transform: uppercase;
  }

  .buttons.wrapper button:focus {
    /* border: 1px solid red; */
    /* box-shadow: 0 0 3pt 2pt rgba(10, 10, 10, 0.3); */
    outline: 0;
  }

  .buttons.wrapper button > :global(ion-icon) {
    height: 1.125rem;
    width: 1.125rem;
  }

  .buttons button:last-child {
    margin-left: auto;
  }

  .buttons button:first-child > :global(ion-icon) {
    margin-right: var(--space-04);
  }

  .buttons button:last-child > :global(ion-icon) {
    margin-left: var(--space-04);
  }

  @media only screen and (min-width: 60em) {
    :root {
      --layout-sidebar-one-width: 30%;
      --layout-content-width-value: 70;
      --layout-sidebar-two-width-value: 30;
    }

    .layout.wrapper.content > :global([slot="sidebar-one"]) {
      display: block;
    }
  
    .layout.wrapper > :global([slot="sidebar-one"]) {
      flex-basis: var(--layout-sidebar-one-width);
    }

    .layout.main {
      flex-basis: var(--layout-content-width);
    }

    .buttons.wrapper {
      width: 100%;
    }

    .buttons button:first-child {
      display: none;
    }

    .layout.wrapper.table-of-contents > :global([slot=header] .header-wrapper),
    .layout.wrapper.table-of-contents .buttons.group {
      transform: translateX(calc(-1% * var(--layout-sidebar-two-width-value)));
    }
  }

  @media only screen and (min-width: 75em) {
    :root {
      --layout-sidebar-one-width: 20%;
      --layout-content-width: 60%;
      --layout-header-width: var(--layout-content-width);
      --layout-sidebar-two-width: 20%;
    }

    .layout.wrapper.content > :global([slot="sidebar-one"]),
    .layout.wrapper.content > :global([slot="sidebar-two"]) {
      display: block;
    }

    .layout.wrapper > :global([slot="sidebar-one"]) {
      flex-basis: var(--layout-sidebar-one-width);
    }

    .layout.wrapper > :global([slot="sidebar-two"]) {
      flex-basis: var(--layout-sidebar-two-width);
    }

    .layout.main {
      flex-basis: var(--layout-content-width);
    }

    .buttons.group {
      display: none;
    }
  }

  @media only screen and (min-width: 105em) {}
</style>

<svelte:window bind:scrollY={y} bind:innerHeight={wh} />

<div class="layout wrapper {show}" class:sticky-sidebar={stickySidebar} style="--offset: {stickyOffset}px">
  <slot name="header" />
  <div class="buttons group">
    <div class="buttons wrapper">
      <button on:click={showNavigation}>
        <ion-icon name="menu"></ion-icon>
        Navigation
      </button>
      <button on:click={showContents}>
        Contents
        <ion-icon name="list"></ion-icon>
      </button>
    </div>
  </div>
  <slot name="sidebar-one" />
  <div class="layout main">
    <div class="layout main-wrapper">
      <slot name="content" />
    </div>
  </div>
  <slot name="sidebar-two" />
</div>
<slot name="footer" />
