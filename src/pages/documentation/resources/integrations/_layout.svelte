<script lang="ts">
  import { onMount } from 'svelte';
  import { menuItems, filterItems } from '@nymea/components';

  onMount(() => {
    menuItems.set([]);
    filterItems.set([]);
  });
</script>

<slot />
