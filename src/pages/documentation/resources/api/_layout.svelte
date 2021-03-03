<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from 'svelte';
  import { params, url } from '@sveltech/routify';
  import { isEmptyObject } from '@nymea/utils';
  import { filterItems } from '@nymea/components';
  import { api } from '../api/api.js';
  import Heading from '../api/heading.svelte';
  import { initCodeBlocks } from '../../_documentation-utils.js';
  import { menuItems } from '../../../../_components/menu/_store.js';
  import { tableOfContents } from '../../../../_components/table-of-contents/_store.js';
  import { apiTypes, apiNamespaces, enums, filteredApi, flags, methods, notifications, refs, types } from '../api';
  import { currentApiNamespace, currentApiType } from '../api/_stores.js';

  $: setCurrentFilters($params);
  $: setMenu($params, $apiTypes, $apiNamespaces);
  $: setTableOfContents($enums, $flags, $types, $methods, $notifications);

  onMount(() => {
    if (isEmptyObject($params)) {
      currentApiType.reset();
      currentApiNamespace.reset();
    }
  });

  afterUpdate(() => {
    // TODO: Causes a lot of calls even when changeing the URL hash => find a better way to call initCodeBlocks() only when content changes
    // initCodeBlocks();
  });

  function setCurrentFilters(params) {    
    if (!params.hasOwnProperty('namespace')) {
      params.namespace = 'all';
    }

    Object.entries(params).forEach(([key, value]) => {
      switch (key) {
        case 'type':
          currentApiType.set(value === 'all' ? null : value);
          break;
        case 'namespace':
          currentApiNamespace.set(value === 'all' ? null : value);
          break;
        default:
          break;
      }
    });
  }

  function setMenu(params, types, namespaces) {
    menuItems.set([
      // {
      //   label: 'Namespace',
      //   children: [
          // {
          //   active: params.hasOwnProperty('namespace') && params.namespace === 'all',
          //   label: 'All',
          //   link: getQueryString('namespace', 'all', params)
          // },
          {
            active: params.hasOwnProperty('namespace') && params.namespace === 'all',
            label: 'All',
            link: './resources/api'
          },
          ...namespaces.map(({ label }) => ({
            active: params.hasOwnProperty('namespace') && params.namespace === label.toLowerCase(),
            label,
            link: `./resources/api/${label.toLowerCase()}`
          }))
      //   ]
      // }
    ]);
  }

  function setTableOfContents($enums, $flags, $types, $methods, $notifications) {
    const enums = getTableOfContentsEntry('enums', 'Enums', '#enums', $enums);
    const flags = getTableOfContentsEntry('flags', 'Flags', '#flags', $flags);
    const types = getTableOfContentsEntry('types', 'Types', '#types', $types);
    const methods = getTableOfContentsEntry('methods', 'Methods', '#methods', $methods);
    const notifications = getTableOfContentsEntry('notifications', 'Notifications', '#notifications', $notifications);
    let tableOfContentsItems = [];

    if (enums) {
      tableOfContentsItems = enums;
    }

    if (flags) {
      tableOfContentsItems = [
        ...tableOfContentsItems,
        ...flags
      ];
    }

    if (types) {
      tableOfContentsItems = [
        ...tableOfContentsItems,
        ...types
      ];
    }

    if (methods) {
      tableOfContentsItems = [
        ...tableOfContentsItems,
        ...methods
      ];
    }

    if (notifications) {
      tableOfContentsItems = [
        ...tableOfContentsItems,
        ...notifications
      ];
    }

    tableOfContents.set(tableOfContentsItems);
  }

  function getTableOfContentsEntry(id, label, link, items) {
    return items.length > 0
      ? [
          {
            id,
            label,
            link,
            level: 2
          },
          ...items.map((item) => ({ ...item, level: 3 }))
        ]
      : undefined;
  }

  function getQueryString(key, value, queryObj) {
    const queryObjCopy = { ...queryObj };
    if (key && value) {
      queryObjCopy[key] = value;
    }
    return `?${Object.entries(queryObjCopy).map(([key, value]) => `${key}=${value}`).join('&')}`;
  }

  function getRefs(refs, value) {
    if (typeof value === 'string') {
      if (value.includes('$ref:')) {
        refs = [ ...refs, value.replace('$ref:', '') ];
      }
    } else if (Array.isArray(value)) {
      value.forEach((valueItem) => {
        refs = getRefs(refs, valueItem);
      });
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
      Object.values(value).forEach((valueItem) => {
        refs = getRefs(refs, valueItem);
      });
    }
    return refs;
  }

  function createIdFromKey(key: string) {
    return key[0].toLowerCase() + key.slice(1, key.length).replace('.', '').replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }
</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr min(65ch, 100%) 1fr;
  }

  .wrapper > * {
    grid-column: 2;
  }

  .wrapper .code,
  .wrapper blockquote {
    margin-left: calc(-1 * var(--space-04));
    width: calc(min(65ch, 100%) + 2 * var(--space-04));
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.5rem;
    margin-top: 3rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  }

  h3 a {
    color: var(--text-color);
  }

  p a {
    color: var(--text-color);
    font-weight: 700;
    text-decoration: none;
  }

  :global(.hljs-string a) {
    color: #a3be8c;
  }
</style>

<svelte:head>
  <title>api &middot; documentation</title>
</svelte:head>

<div class="wrapper">
  <slot />

  <!-- {#each $refs as ref}
    <p>{ref}</p>
  {/each} -->

  {#if $enums.length > 0}
    <h2 id="enums">Enums</h2>
    {#each $enums as nymeaEnum}
      <h3 id={nymeaEnum.id}><a href={$url(nymeaEnum.link)}>{nymeaEnum.label}</a></h3>
      {#if nymeaEnum.code}
        <pre class="code"><code class="hljs json">{@html nymeaEnum.code}</code></pre>
      {/if}
    {/each}
  {/if}

  {#if $flags.length > 0}
    <h2 id="flags">Flags</h2>
    {#each $flags as nymeaFlag}
      <h3 id={nymeaFlag.id}><a href={$url(nymeaFlag.link)}>{nymeaFlag.label}</a></h3>
      {#if nymeaFlag.code}
        <pre class="code"><code class="hljs json">{@html nymeaFlag.code}</code></pre>
      {/if}
    {/each}
  {/if}

  {#if $types.length > 0}
    <h2 id="types">Types</h2>
    {#each $types as nymeaType}
      <h3 id={nymeaType.id}><a href={$url(nymeaType.link)}>{nymeaType.label}</a></h3>
      {#if nymeaType.code}
        <pre class="code"><code class="hljs json">{@html nymeaType.code}</code></pre>
      {/if}
      {#if nymeaType.deprecations.length > 0}
        <blockquote>
          <p>
            <strong>Warning:</strong> following values are deprecated and will be removed with the next major API version:<br />
            {nymeaType.deprecations}
          </p>
        </blockquote>
      {/if}
      {#if nymeaType.references.length > 0}
        <p>See also: 
          {#each nymeaType.references as reference, index}
            <a href={$url(reference.link)}>{reference.label}{#if index !== nymeaType.references.length - 1},&ensp;{/if} </a>
          {/each}
        </p>
      {/if}
    {/each}
  {/if}

  {#if $methods.length > 0}
    <h2 id="methods">Methods</h2>
    {#each $methods as nymeaMethod}
      <!-- <pre>{ JSON.stringify(nymeaMethod) }</pre> -->

      <h3 id={nymeaMethod.id}><a href={$url(nymeaMethod.link)}>{nymeaMethod.label}</a></h3>

      {#if nymeaMethod.description}
        <p>{@html nymeaMethod.description}</p>
      {/if}

      {#if nymeaMethod.deprecated}
        <blockquote>
          <p><strong>Note:</strong> {nymeaMethod.deprecated}</p>
        </blockquote>
      {/if}

      {#if nymeaMethod.params}
        <p>Params</p>
        <pre class="code"><code class="hljs json">{@html nymeaMethod.params}</code></pre>
      {/if}

      {#if nymeaMethod.returns}
        <p>Returns</p>
        <pre class="code"><code class="hljs json">{@html nymeaMethod.returns}</code></pre>
      {/if}

      {#if nymeaMethod.deprecations.length > 0}
        <blockquote>
          <p>
            <strong>Warning:</strong> following values are deprecated and will be removed with the next major API version:<br />
            {nymeaMethod.deprecations}
          </p>
        </blockquote>
      {/if}

      {#if nymeaMethod.references.length > 0}
        <p>See also: 
          {#each nymeaMethod.references as reference, index}
            <a href={$url(reference.link)}>{reference.label}{#if index !== nymeaMethod.references.length - 1},&ensp;{/if}</a>
          {/each}
        </p>
      {/if}
    {/each}
  {/if}

  {#if $notifications.length > 0}
    <h2 id="methods">Notifications</h2>

    {#each $notifications as nymeaNotification}
      <h3 id={nymeaNotification.id}><a href={$url(nymeaNotification.link)}>{nymeaNotification.label}</a></h3>

      {#if nymeaNotification.description}
        <p>{@html nymeaNotification.description}</p>
      {/if}

      {#if nymeaNotification.deprecated}
        <blockquote>
          <p><strong>Note:</strong> {nymeaNotification.deprecated}</p>
        </blockquote>
      {/if}

      {#if nymeaNotification.params}
        <p>Params</p>
        <pre class="code"><code class="hljs json">{nymeaNotification.params}</code></pre>
      {/if}

      {#if nymeaNotification.deprecations.length > 0}
        <blockquote>
          <p>
            <strong>Warning:</strong> following values are deprecated and will be removed with the next major API version:<br />
            {nymeaNotification.deprecations}
          </p>
        </blockquote>
      {/if}

      {#if nymeaNotification.references.length > 0}
        <p>See also: 
          {#each nymeaNotification.references as reference, index}
            <a href={$url(reference.link)}>{reference.label}{#if index !== nymeaNotification.references.length - 1},&ensp;{/if}</a>
          {/each}
        </p>
      {/if}
    {/each}
  {/if}
</div>
