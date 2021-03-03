<script>
  import { url } from '@sveltech/routify';

  export let text = false;
  export let height = 'auto';
  export let width = 'auto';
</script>

<style>
  a {
    align-items: center;
    display: flex;
  }
  
  a,
  img {
    height: var(--height);
    max-width: none;
    width: var(--width);
  }
</style>

<a href={$url('/')} class="logo">
  {#if text}
    <!-- <img src="/img/logo-text.svg" alt="" style="--height: {height}; --width: {width};" /> -->
    <img src="/img/logo-text-white.svg" alt="" style="--height: {height}; --width: {width};" />
  {:else}
    <img src="/img/logo.svg" alt="" style="--height: {height}; --width: {width};" />
  {/if}
</a>
