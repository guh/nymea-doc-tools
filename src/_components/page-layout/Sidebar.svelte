<script lang="ts"></script>

<style>
  :root {
    --sidebar-background: var(--white);
  }

  .sidebar {
    box-sizing: content-box;
    height: 100%;
    margin-right: -9999px;
    padding-right: 9999px;
    overflow-y: scroll;

    background-color: var(--sidebar-background);
    width: var(--sidebar-width);
  }
</style>

<div class="sidebar">
  <slot />
</div>
