<!-- <script context="module">
  import { img } from '@nymea/components';
  export { img };
</script> -->

<script>
  import { onMount } from 'svelte';
  import { page, route, url } from '@sveltech/routify';
  import { menuItems, tableOfContents } from '@nymea/components';
  import menuOrder from '../../menu-order.json';
  import { api } from './developers/clients/raw-api';

  export let title;
  export let y;

  let markdown;
  let headingTopList = [];

  // $: (y, setActiveToc(y));

  let base = '/documentation';

  function setActiveToc(y) {
    const active = headingTopList.find((headingTop, index) => {
      const nextHeading = headingTopList[index + 1];
      if (nextHeading) {
        return y >= headingTop.top && nextHeading.top;
      }
      return y >= headingTop.top;
    });

    if (active) {
      const items = $tableOfContents.map((tocItem) => {
        if(tocItem.link === '#' + active.id) {
          console.log('setActiveToc() - tocItem', tocItem);
          tocItem.active = true;
        } else {
          tocItem.active = false;
        }
        return tocItem;
      });

      tableOfContents.set(items);
      }
  }

  onMount(() => {
    const path = $route.api.path;
    let structure = [];
    let items = [];

    if (path.startsWith('/documentation/overview')) {
      structure = getMenuStructure(menuOrder, ['documentation', 'overview']);
      items = getMenuItems(structure, '/documentation/overview');
    } else if (path.startsWith('/documentation/users')) {
      structure = getMenuStructure(menuOrder, ['documentation', 'users']);
      items = getMenuItems(structure, '/documentation/users');
    } else if (path.startsWith('/documentation/developers')) {
      structure = getMenuStructure(menuOrder, ['documentation', 'developers']);
      items = getMenuItems(structure, '/documentation/developers');
    }

    menuItems.set(items);

    const pathParts = path.split('/');
    base = `${pathParts[0]}/${pathParts[1]}/${pathParts[2]}`;

    // "/documentation/users/installation/getting-started" => "users"
    const [,menuRoute] = $route.api.path.replace(base, '').split('/');
    const childRoutes = getChildRoutes($route, menuRoute);

    // only h2-h6, h1 should be reserved for the page title
    const headingNodeList = markdown.querySelectorAll('h2, h3, h4, h5, h6')
    const headingElements = [];
    headingTopList = [];

    for (let i = 0; i < headingNodeList.length; i++) {
      headingElements.push(headingNodeList[i]);
      headingTopList.push({
        id: createIdFromElement(headingNodeList[i]),
        top: headingNodeList[i].getBoundingClientRect().top
      });
    }

    tableOfContents.set(addElements(headingElements, []));
  });

  function getMenuStructure(menuOrder, pathItems) {
    const currentPathItem = pathItems.length >= 1 ? pathItems.shift() : undefined;

    return menuOrder
      .filter((menuOrderItem) => menuOrderItem.filename === currentPathItem)
      .reduce((menuStructureItems, menuOrderItem) => {
        if (pathItems.length === 0 && menuOrderItem.children) {
          menuStructureItems = menuOrderItem.children;
        } else if (menuOrderItem.children) {
          menuStructureItems = getMenuStructure(menuOrderItem.children, pathItems);
        } else {
          menuStructureItems = [];
        }
        return menuStructureItems;
      }, []);
  }

  function getMenuItems(menuStructure, currentLink) {
    return menuStructure.map((menuStructureItem) => {
      const link = currentLink + '/' + menuStructureItem.filename;

      return {
        label: menuStructureItem.title,
        link: menuStructureItem.children ? undefined : link,
        children: menuStructureItem.children ? getMenuItems(menuStructureItem.children, link) : undefined
      };
    });
  }

  function getChildRoutes(currentRoute, menuRoute) {
    if (currentRoute.parent !== undefined) {
      if (currentRoute.parent.isDir && currentRoute.parent.api.path === `${base}` && currentRoute.parent.children !== undefined) {
        return currentRoute.parent.children;
      }
      return getChildRoutes(currentRoute.parent, menuRoute);
    }
  }

  function addElements(elements, items) {
    let index = 0;
    let element;
    let id;
    let originalHtml;
    let newHtml;
    let level;

    while (index < elements.length) {
      element = elements[index];

      id = createIdFromElement(element);

      originalHtml = element.innerHTML;
      newHtml = `<a class="toc-link" href="${$url('#' + id)}">${originalHtml}</a>`;

      element.id = id;
      element.innerHTML = newHtml;

      level = createLevelFromElement(element);

      items.push({
        label: element.textContent,
        link: `#${element.id}`,
        level,
        active: false
      });

      index = index + 1;
    }

    return items;
  }

  function createIdFromElement(element) {
    return element.textContent.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-');
  }

  function createLevelFromElement(element) {
    if (element === undefined) {
      return -1;
    }
    return parseInt(element.tagName.replace('H', ''), 10);
  }
</script>

<style>
  h1,
  :global(h1) {
    align-items: center;
    display: flex;
    font-size: 2.25rem;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 3rem;
    line-height: 4.5rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr min(65ch, 100%) 1fr;
  }

  div > :global(*) {
    grid-column: 2;
  }

  div > :global(.full-bleed),
  div > :global(.code),
  div > :global(blockquote),
  div > :global(.image) {
    margin-left: calc(-1 * var(--space-04));
    width: calc(min(65ch, 100%) + 2 * var(--space-04));
  }

  div > :global(blockquote) {
    color: var(--grey-base);
  }

  div > :global(blockquote > strong) {
    display: block;
    font-size: 0.8rem;
    line-height: 0.8rem;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
  }

  div > :global(blockquote > p) {
    margin: 0;
  }

  div :global(a) {
    color: var(--text-color);
    text-decoration: none;
  }

  div :global(img) {
    margin-top: 1.5rem;
  }

  div :global(h2) {
    font-size: 1.25rem;
    font-size: 2.25rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    letter-spacing: -0.025em;
    line-height: 1.5rem;
    line-height: 3rem;
    margin-top: var(--space-09);
  }

  div :global(h3) {
    font-size: 1.125rem;
    font-size: 1.25rem;
    font-weight: 400;
    font-weight: 500;
    line-height: 1.5rem;
    margin-top: 3rem;
  }

  div :global(h4) {
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.5rem;
    margin-top: 3rem;
  }

  div :global(h5) {
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.5rem;
    margin-bottom: 0;
  }

  div :global(h6) {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  div :global(p) {
    margin-top: 1.5rem;
  }

  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    display: block;
    scroll-margin-top: var(--space-10);
  }

  @media only screen and (min-width: 48em) {
    div > :global(.full-bleed),
    div > :global(.code),
    div > :global(blockquote) {
      margin-left: calc(-1 * var(--space-07));
      width: calc(min(65ch, 100%) + 2 * var(--space-07));
    }
  }
</style>

<svelte:window bind:scrollY={y}/>

<div bind:this={markdown}>
  {#if $route.api.path.substring(0, $route.api.path.lastIndexOf('/')) !== '/documentation/resources/integrations'}
    <h1>{title}</h1>
  {/if}

  <slot />
</div>
