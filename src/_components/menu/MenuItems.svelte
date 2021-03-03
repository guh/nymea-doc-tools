<script lang="ts">
  import { isActive, route, url } from '@sveltech/routify';
  import type { MenuItem } from './_types';

  export let level = 0;
  export let items: MenuItem[] = [];

  function isActiveItem(item) {
    console.log('isActiveItem()', item.active, $route.path, $route.path.includes('/resources/api') === false, $isActive(item.link));
    return item.active || ($route.path.includes('/resources/api') === false && $isActive(item.link));
  }
</script>

<style>
  .menu-items.level-0 {
    margin-bottom: var(--space-10);
    padding-left: 0;
  }

  .menu-items {
    padding-left: 0.75rem;
  }

  li {
    position: relative;
  }

  li a {
    display: block;
  }

  li a::before {
    border-radius: 0.125rem;
    content: "";
    height: calc(1.5rem - 2px);
    position: absolute;
    right: calc(-1 * var(--space-09));
    top: 0;
    width: 0.25rem;
  }

  a.active::before {
    background-color: var(--turquoise-base);
  }


  a.active {
    color: var(--text-color);
    text-decoration: underline;
  }

  a:hover::before {
    background-color: var(--grey-base);
  }

  a:hover {
    color: var(--text-color);
    text-decoration: underline;
  }

  div {
    color: var(--text-color);
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: var(--space-07);
  }

  div + :global(.toc-items) {
    padding-left: 0;
  }

  a {
    color: var(--grey-base);
    font-size: 0.8rem;
    text-decoration: none;
  }

  @media only screen and (min-width: 60em) {
    .menu-items.level-0 {
      margin-top: var(--space-07);
    }

    li::before {
      right: calc(-1 * var(--space-09));
    }
  }
</style>

<ul class="menu-items level-{level}" style="--level: {level}">
  {#each items as item}
    <li>
      {#if item.link}
        <a class:active={isActiveItem(item)} href={$url(item.link)}>{item.label}</a>        
      {:else}
        <div>{item.label}</div>
      {/if}

      {#if item.children && item.children.length > 0}
        <svelte:self items={item.children} level={level + 1} />
      {/if}
    </li>
  {/each}
</ul>
