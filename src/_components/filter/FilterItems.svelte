<script lang="ts">
  import { url } from '@sveltech/routify';
  import type { FilterItem } from './_types';

  export let level = 0;
  export let items: FilterItem[] = [];
</script>

<style>
  .filter-items.level-0 {
    padding-left: 0;
  }

  .filter-items {
    padding-left: 0.75rem;
  }

  .filter-item-heading {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    margin-top: var(--space-07);
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
    left: calc(-3rem - var(--level) * 0.75rem - 1px);
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

  a {
    color: var(--grey-base);
    font-size: 0.8rem;
    text-decoration: none;
  }
</style>

<ul class="filter-items level-{level}" style="--level: {level}">
  {#each items as item}
    <li>
      {#if item.link}
        <a class:active={item.active} href={$url(item.link)}>{item.label}</a>
      {:else if item.children && item.children.length > 0}
        {#if level === 0 && item.label}
          <span class="filter-item-heading">{item.label}</span>
        {/if}
        <svelte:self items={item.children} level={level + 1} />
      {:else}
        {item.label}
      {/if}
    </li>
  {/each}
</ul>