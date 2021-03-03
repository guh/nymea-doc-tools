<script lang="ts">
  import Heading from './heading.svelte';
  import { menuItems } from '@nymea/components';

  export let namespace;
  $: currentNamespace = $menuItems[0] && $menuItems[0].children && $menuItems[0].children.find((menuItem) => menuItem.label.toLowerCase() === namespace);
</script>

<Heading namespace={currentNamespace && currentNamespace.label}></Heading>
