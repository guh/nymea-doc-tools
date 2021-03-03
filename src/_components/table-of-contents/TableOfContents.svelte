<script lang="ts">
  import { afterPageLoad } from '@sveltech/routify';
import { onMount } from 'svelte';
  import TableOfContentsItems from './TableOfContentsItems.svelte';

  export let items = [];

  onMount(() => {
    items = [ ...items ];
  });

  $afterPageLoad(() => {
    // needed to refresh view of TableOfContentsItems when user clicks on another item
    items = [ ...items ];
  });
</script>

<style>
  .toc {
    border-left: 1px solid var(--header-border-color);
    margin-top: calc(var(--space-07) + var(--space-09));
    padding: var(--space-09) var(--space-09) var(--space-10);
  }

  h2 {
    color: var(--grey-base);
    display: none;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5rem;
    padding: 0 0 var(--space-07);
    text-transform: uppercase;
  }

  h2 :global(ion-icon) {
    height: 1.125rem;
    margin-right: var(--space-04);
    width: 1.125rem;
  }

  @media only screen and (min-width: 60em) {
    h2 {
      display: flex;
    }

  }
</style>

<div class="toc">
  <h2>
    <ion-icon name="list"></ion-icon>
    Contents
  </h2>
  <TableOfContentsItems {items} />
</div>
