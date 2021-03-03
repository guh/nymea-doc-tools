<script lang="ts">
  import FilterItems from './FilterItems.svelte';
  import { filterItems } from './_store';
</script>

<style>
  h2 {
    align-items: center;
    color: var(--grey-base);
    display: flex;
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

  .filter {
    border-left: 1px solid var(--header-border-color);
    padding: var(--space-10) var(--space-09);
  }

  @media only screen and (min-width: 60em) {
    .filter {
      margin-top: calc(var(--space-07) + var(--space-09));
      padding: var(--space-09) var(--space-09) var(--space-10);
    }
  }
</style>

<div class="filter">
  <h2>
    <ion-icon name="filter"></ion-icon>
    Filter
  </h2>
  <FilterItems items={$filterItems} />
</div>