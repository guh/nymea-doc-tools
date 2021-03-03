<script lang="ts">

</script>

<style>
  :root {
    --header-background: transparent;
    --header-branding-background: transparent;
    --header-links-background: transparent;
    --header-navigation-background: transparent;
    --header-border-color: var(--silver-darken-10);
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
  }

  .header-wrapper {
    background: var(--header-background);
            backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    display: flex;
    margin: 0 auto;
    width: 100%;
  }

  .header-wrapper > :global([slot="branding"]) {
    background: var(--header-branding-background);
    border-left: 1px solid var(--header-border-color);
    padding: var(--space-03) var(--space-09);
  }

  .navigation-wrapper {
    margin-left: auto;
    position: relative;
  }

  .navigation-wrapper > :global([slot="navigation"]) {
    padding: var(--space-07) var(--space-09);
    width: min(calc(65ch + 2 * var(--space-09)), 100%);
  }

  .header-wrapper > :global([slot="links"]) {
    background: var(--header-links-background);
    flex-basis: 0%;
  }

  @media only screen and (min-width: 60em) {
    .header-wrapper {
      border-left: 0;
      width: 100%;
    }

    .header-wrapper > :global([slot="branding"]) {
      flex-basis: 30%;
    }

    .navigation-wrapper {
      border-left: 1px solid var(--header-border-color);
      flex-basis: 70%;
    }

    .navigation-wrapper > :global([slot="navigation"]) {
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 75em) {
    .header-wrapper > :global([slot="branding"]),
    .header-wrapper > :global([slot="links"]) {
      flex-basis: 20%;
    }

    .navigation-wrapper {
      flex-basis: 60%;
    }
  }

  @media only screen and (min-width: 105em) {}
</style>

<header>
  <div class="header header-wrapper">
    <slot name="branding" />
    <div class="header navigation-wrapper">
      <slot name="navigation" />
    </div>
    <slot name="links" />
  </div>
</header>
