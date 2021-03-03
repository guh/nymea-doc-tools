<script>
  import { afterPageLoad, beforeUrlChange, params, route, url } from '@sveltech/routify';

  export let level = 0;
  export let items = [];

  function scrollTo(link) {
    const element = document.getElementById(link);
    const style = window.getComputedStyle(element);
    const headerHeight = parseFloat(style.getPropertyValue('--header-height').replace('rem', ''));
    const yOffset = (headerHeight + 1.5) * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});

    // if(window.history.pushState) {
    //   window.history.pushState(null, null, '#' + link);
    // } else {
    //   window.location.hash = '#' + link;
    // }
  }

  // Used because $isActive() helper does not work with urls with query strings
  // TODO: When there is a routify update, check if it starts working
  function isActive(item) {
    if (item.link) {
      if (item.link.startsWith('#')) {
        return encodeURI(item.link) === location.hash;
      } else if (item.link.startsWith('?')) {
        const locationQueryObject = getQueryObject(location.search);
        const itemLinkQueryObject = getQueryObject(item.link);

        return Object.entries(itemLinkQueryObject).reduce((isActive, [key, value]) => {
          return isActive && locationQueryObject.hasOwnProperty(key) && locationQueryObject[key] === value;
        }, true);
      }
    } else {
      return `${$route.path}/${item.link}`=== location.pathname;
    }
  }

  function getQueryObject(queryString) {
    return queryString.replace('?', '').split('&').reduce((object, keyValueString) => {
      const [key, value] = keyValueString.split('=');
      object[key] = value;
      return object;
    }, {});
  }

  function getQueryArray() {
    const queryArray = location.search.replace('?', '').split('&').reduce((array, keyValueString) => {
      const [key, value] = keyValueString.split('=');
      return [
        ...array,
        { key, value }
      ];
    }, []);
    console.log('isActive search - getQueryArray()', queryArray);
    return queryArray;
  }
</script>

<style>
  .toc-items.level-0 {
    padding-left: 0;
  }
  .toc-items {
    padding-left: 0.75rem;
  }

  li {
    position: relative;
  }

  li a {
    display: block;
  }

  li > a,
  li > div {
    padding-left: calc((var(--level) - 2) * 0.75rem);
  }

  li a::before {
    border-radius: 0.125rem;
    content: "";
    height: calc(1.5rem - 2px);
    position: absolute;
    left: calc(-1 * var(--space-09));
    top: 0;
    width: 0.25rem;
  }

  a.active::before {
    background-color: var(--turquoise-base);
  }


  a.active {
    color: var(--text-color);
    font-weight: 600;
  }

  a:hover::before {
    background-color: var(--grey-base);
  }

  a:hover {
    color: var(--text-color);
    text-decoration: underline;
  }

  div {
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: var(--space-07);
    text-transform: uppercase;
  }

  div + :global(.toc-items) {
    padding-left: 0;
  }

  div + .toc-items li::before {
    left: calc(-3rem - (var(--level) - 2) * 0.75rem - 1px);
  }

  a {
    color: var(--grey-base);
    font-size: 0.8rem;
    text-decoration: none;
  }
</style>

<ul class="toc-items level-{level}">
  {#each items as item, index}
    {#if !Array.isArray(item)}
      <li>        
        {#if item.link && item.link !== ''}
          <a class:active={item.active || isActive(item)} style="--level: {item.level}" href={$url(item.link)}>{item.label}</a>
        {:else}
          <div style="--level: {item.level}">{item.label}</div>
        {/if}
        {#if index + 1 < items.length && Array.isArray(items[index + 1])}
          <svelte:self items={items[index + 1]} level={level + 1} />
        {/if}
      </li>
    {/if}
  {/each}
</ul>
