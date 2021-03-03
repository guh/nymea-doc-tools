<script lang="ts">
  import { api } from './api.js';
</script>

<style>
  h1 {
    align-items: center;
    display: flex;
    font-size: 3rem;
    font-weight: 500;
    grid-column: 2;
    letter-spacing: -0.025em;
    line-height: 4.5rem;
  }

  h1 .version {
    background-color: var(--silver-base);
    border: 1px solid var(--silver-darken-20);
    border-radius: 4px;
    font-size: 1rem;
    height: 2rem;
    line-height: 1rem;
    margin-left: auto;
    padding: 0.4rem 0.5rem 0.6rem;
  }
</style>

<h1>API Reference<div class="version">Version {api.version}</div></h1>
