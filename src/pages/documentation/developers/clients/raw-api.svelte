<script>
  import { onMount } from 'svelte';
  import { url } from '@sveltech/routify';
  import { api } from './raw-api.js';
  import { initCodeBlocks } from '../../_documentation-utils.js';

  onMount(() => {
    // initCodeBlocks();
  });

  Object.entries(api.methods).forEach(([methodKey, methodValue]) => {
      let refs = [];
      if (methodValue.params) {
        refs = getRefs(refs, methodValue.params);
      }
      if (methodValue.returns) {
        refs = getRefs(refs, methodValue.returns);
      }
      api.methods[methodKey].refs = [ ...new Set(refs) ];
    });

  Object.entries(api.notifications).forEach(([notificationKey, notificationValue]) => {
      let refs = [];
      if (notificationValue.params) {
        refs = getRefs(refs, notificationValue.params);
      }
      api.notifications[notificationKey].refs = [ ...new Set(refs) ];
    });

  
  Object.entries(api.types).forEach(([typeKey, typeValue]) => {
      let refs = [];
      refs = getRefs(refs, typeValue);
      api.types[typeKey].refs = [ ...new Set(refs) ];
      api.types[typeKey].deprecated = [];

      Object.entries(typeValue).forEach(([propertyKey, propertyValue]) => {
        console.log('propertyKey, propertyValue', propertyKey, propertyValue, propertyKey.substring(0, 2));
        if (propertyKey.substring(0, 2) === 'd:') {
          api.types[typeKey].deprecated.push(propertyKey.substring(2, propertyKey.length));
        }
      });
    });

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
</script>

<style>
  p a {
    color: var(--text-color);
    font-weight: 700;
    text-decoration: none;
  }
</style>

<h1>The complete API</h1>
<p>In the following section you can find a detailed description of the current API version {api.version}.</p>
<ul>
  {#each Object.keys(api).filter((apiCategory) => apiCategory !== 'version') as apiCategory}
    <li><a href={$url('#' + apiCategory.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiCategory}</a></li>
  {/each}
</ul>

<h2 id="enums">Enums</h2>
<ul>
  {#each Object.keys(api.enums) as apiEnum}
    <li><a href={$url('#' + apiEnum.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiEnum}</a></li>
  {/each}
</ul>

{#each Object.entries(api.enums) as [apiEnumKey, apiEnumValue]}
  <p id={apiEnumKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}><a href={$url('#' + apiEnumKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiEnumKey}</a></p>
  <pre><code class="hljs json">
[
  {apiEnumValue.map((value) => `"${value}"`).join(',\n  ')}
]
</code></pre>
{/each}

<h2 id="flags">Flags</h2>
<ul>
  {#each Object.keys(api.flags) as apiFlag}
    <li><a href={$url('#' + apiFlag.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiFlag}</a></li>
  {/each}
</ul>

{#each Object.entries(api.flags) as [apiFlagKey, apiFlagValue]}
  <p id={apiFlagKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}><a href={$url('#' + apiFlagKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiFlagKey}</a></p>
  <pre><code class="hljs json">
[
  {apiFlagValue.map((value) => `"${value}"`).join(',\n  ')}
]
</code></pre>
{/each}

<h2 id="methods">Methods</h2>
<ul>
  {#each Object.keys(api.methods) as apiMethod}
    <li><a href={$url('#' + apiMethod.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiMethod}</a></li>
  {/each}
</ul>

{#each Object.entries(api.methods) as [apiMethodKey, apiMethodValue]}
  <p id={apiMethodKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}><a href={$url('#' + apiMethodKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiMethodKey}</a></p>
  
  {#if apiMethodValue.description}
    <p>{@html apiMethodValue.description.replace('\n', '<br />')}</p>
  {/if}
  
  {#if apiMethodValue.deprecated}
    <blockquote>
      <p><strong>Note:</strong> {apiMethodValue.deprecated}</p>
    </blockquote>
  {/if}
  
  {#if apiMethodValue.params}
    <p>Params</p>
    <pre><code class="hljs json">
  {JSON.stringify(apiMethodValue.params, null, 2)}
  </code></pre>
  {/if}

  {#if apiMethodValue.returns}
    <p>Returns</p>
    <pre><code class="hljs json">
  {JSON.stringify(apiMethodValue.returns, null, 2)}
  </code></pre>
  {/if}

  {#if apiMethodValue.refs.length > 0}
    <p>See also: {@html apiMethodValue.refs.sort().map((ref) => `<a href="#${ref.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}">${ref}</a>`).join(', ')}</p>
  {/if}
{/each}

<h2 id="notifications">Notifications</h2>
<ul>
  {#each Object.keys(api.notifications) as apiNotification}
    <li><a href={$url('#' + apiNotification.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiNotification}</a></li>
  {/each}
</ul>

{#each Object.entries(api.notifications) as [apiNotificationKey, apiNotificationValue]}
  <p id={apiNotificationKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}><a href={$url('#' + apiNotificationKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiNotificationKey}</a></p>
  
  {#if apiNotificationValue.description}
    <p>{@html apiNotificationValue.description.replace('\n', '<br />')}</p>
  {/if}
  
  {#if apiNotificationValue.deprecated}
    <blockquote>
      <p><strong>Note:</strong> {apiNotificationValue.deprecated}</p>
    </blockquote>
  {/if}
  
  {#if apiNotificationValue.params}
    <p>Params</p>
    <pre><code class="hljs json">
  {JSON.stringify(apiNotificationValue.params, null, 2)}
  </code></pre>
  {/if}

  {#if apiNotificationValue.refs.length > 0}
    <p>See also: {@html apiNotificationValue.refs.sort().map((ref) => `<a href="#${ref.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}">${ref}</a>`).join(', ')}</p>
  {/if}
{/each}

<h2 id="types">Types</h2>
{#each Object.entries(api.types) as [apiTypeKey, apiTypeValue]}
  <p id={apiTypeKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}><a href={$url('#' + apiTypeKey.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ''))}>{apiTypeKey}</a></p>
  <pre><code class="hljs json">
  {JSON.stringify(apiTypeValue, null, 2)}</code>
  </pre>

  {#if apiTypeValue.deprecated}
    <blockquote>
      <p>
        <strong>Warning:</strong> following values are deprecated and will be removed with the next major API version:<br />
        {@html apiTypeValue.deprecated.map((deprecated) => `<span>${deprecated}</span>`).join(', ')}
      </p>
    </blockquote>
  {/if}

  {#if apiTypeValue.refs.length > 0}
    <p>See also: {@html apiTypeValue.refs.sort().map((ref) => `<a href="#${ref.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')}">${ref}</a>`).join(', ')}</p>
  {/if}
{/each}