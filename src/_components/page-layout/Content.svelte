<script lang="ts">
  import { route, url } from '@sveltech/routify';
  import { flattenedMenuItems } from '../menu';
  
  $: links = $flattenedMenuItems.filter((menuItem) => menuItem.link);
  $: currentIndex = links.findIndex((menuItem) => menuItem.link === $route.api.path);
  $: next = links.length > currentIndex + 1 ? links[currentIndex + 1] : undefined;
  $: prev = currentIndex > 0 ? links[currentIndex - 1] : undefined;
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-height));
    margin: 0 auto;
    padding: var(--space-10) var(--space-09) 0;
    position: relative;
    width: min(calc(65ch + 2 * var(--space-09)), 100%);
    z-index: 5;
  }

  .links {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: var(--space-09) 0 var(--space-10);
  }

  .link {
    display: flex;
    padding: var(--space-07) 0;
  }

  .link :global(ion-icon) {
    height: 1.125rem;
    width: 1.125rem;
  }

  .link a {
    color: var(--text-color);
    font-size: 0.8rem;
    line-height: 1.125rem;
    text-decoration: none;
    text-transform: uppercase;;
  }

  .prev {
    align-self: flex-start;
  }

  .prev :global(ion-icon) {
    margin-right: var(--space-04);
  }

  .next {
    margin-left: auto;
  }

  .next :global(ion-icon) {
    margin-left: var(--space-04);
  }
</style>

<div class="content">
  <slot />
  <!-- TODO: fix issues to remove #if -->
  {#if !$route.path.includes('/resources')}
    <div class="links">
      {#if prev}
        <div class="link prev">
          <ion-icon name="arrow-back"></ion-icon>
          <a href={$url(prev.link)}>{prev.label}</a>
        </div>
      {/if}
      {#if next}
        <div class="link next">
          <a href={$url(next.link)}>{next.label}</a>
          <ion-icon name="arrow-forward"></ion-icon>
        </div>
      {/if}
    </div>
  {:else}
    <div class="links"></div>
  {/if}
</div>
