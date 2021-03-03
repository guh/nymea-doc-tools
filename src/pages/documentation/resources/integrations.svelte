<script lang="ts">
  import { params, url } from '@sveltech/routify';
  import {
    filterItems,
    menuItems,
    Tile,
    Tiles
  } from '@nymea/components';
  import { categories, currentCategory, currentOffline, currentStability, currentTechnology, offline, stabilityTypes, technologies, filteredIntegrations } from './integrations/_stores';

  $: setCurrentFilters($params);
  $: setFilter($params);
  $: setMenu($params, $categories);

  function setCurrentFilters(params) {
    Object.entries(params).forEach(([key, value]) => {
      switch (key) {
        case 'category':
          currentCategory.set(value === 'all' ? null : value);
          break;
        case 'offline':
          currentOffline.set(value === 'all' ? null : value);
          break;
        case 'stability':
          currentStability.set(value === 'all' ? null : value);
          break;
        case 'technology':
          currentTechnology.set(value === 'all' ? null : value);
          break;
        default:
      }
    });
  }

  function setFilter(params) {
    filterItems.set([
      {
        label: 'Online/Offline',
        children: [
          {
            active: !params.hasOwnProperty('offline') || (params.hasOwnProperty('offline') && params.offline === 'all'),
            label: 'All',
            link: getQueryString('offline', 'all', params)
          },
          ...$offline.map(({ label }) => ({
            active: params.hasOwnProperty('offline') && params.offline === label.toLowerCase(),
            label,
            link: getQueryString('offline', label.toLowerCase(), params)
          }))
        ]
      },
      {
        label: 'Technology',
        children: [
          {
            active: !params.hasOwnProperty('technology') || (params.hasOwnProperty('technology') && params.technology === 'all'),
            label: 'All',
            link: getQueryString('technology', 'all', params)
          },
          ...$technologies.map((technology) => ({
            active: params.hasOwnProperty('technology') && params.technology === technology.title.toLowerCase(),
            label: technology.title,
            link: getQueryString('technology', technology.title.toLowerCase(), params)
          }))
        ]
      },
      {
        label: 'Stability',
        children: [
          {
            active: !params.hasOwnProperty('stability') || (params.hasOwnProperty('stability') && params.stability === 'all'),
            label: 'All',
            link: getQueryString('stability', 'all', params)
          },
          ...$stabilityTypes.map(({ label }) => ({
            active: params.hasOwnProperty('stability') && params.stability === label.toLowerCase(),
            label,
            link: getQueryString('stability', label.toLowerCase(), params)
          }))
        ]
      }
    ]);
  }

  function setMenu(params, categories) {
    menuItems.set([
      {
        active: !params.hasOwnProperty('category') || (params.hasOwnProperty('category') && params.category === 'all'),
        label: 'All',
        link: `./resources/integrations${getQueryString('category', 'all', params)}`
      },
      ...categories.map((category) => ({
        active: params.hasOwnProperty('category') && params.category === getIdFromTitle(category.title),
        label: category.title,
        link: `./resources/integrations${getQueryString('category', getIdFromTitle(category.title), params)}`
      }))
    ]);
  }

  function getQueryString(key, value, queryObj) {
    const queryObjCopy = { ...queryObj };
    if (key && value) {
      queryObjCopy[key] = value;
    }
    if (Object.entries(queryObjCopy).length === 0) {
      return '';
    }
    return `?${Object.entries(queryObjCopy)
      // .filter(([key]) => key !== 'category')
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
  }

  function getIdFromTitle(title: string): string {
    // no idea why, but e.g. the text "Air Quality Index" will be transformed to "air-quality-" when used as anchor link when creating the toc links
    // but it does work when used as id in the template
    // current workaround is to remove the phrase "index" altogether
    return title.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-').replace('-index', '');
  }
</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr min(65ch, 100%) 1fr;
    /* padding: 0 var(--space-07); */
  }

  .wrapper > h1,
  .wrapper > p {
    grid-column: 2;
  }

  h1 {
    align-items: center;
    display: flex;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 4.5rem;
  }

  p {
    margin-top: var(--space-07);
  }

  .category-description {
    grid-column: 2;
    margin-top: var(--space-07);
  }

  .integrations {
    grid-column: 1 / 4;
    margin-left: calc(-1 * var(--space-07));
    margin-top: var(--space-10);
    width: calc(min(65ch, 100%) + 2 * var(--space-07));
  }

  .integration {
    color: var(--text-color);
    display: block;
    height: 100%;
    position: relative;
    text-decoration: none;
  }

  .integration::before {
    content: '';
    float: left;
    padding-top: 100%;
  }

  .integration > div {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .integration h3 {
    margin-bottom: var(--space-07);
  }

  .integration p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .integration .details {
    margin-top: 0;
  }

  .integration .meta {
    display: flex;
    margin-top: auto;
  }

  .integration .icons {
    display: flex;
    /* margin-left: auto; */
  }

  .integration .icons li {
    margin-left: var(--space-04);
  }

  .integration .icons li:first-of-type {
    margin-left: 0;
  }

  @media only screen and (min-width: 48em) {
    .integrations {
      margin-left: calc(-1 * var(--space-09));
      width: calc(min(65ch, 100%) + 2 * var(--space-09));
    }
  }
</style>

<div class="wrapper">
  <h1>Integrations</h1>

  <p>nymea integrations are extensions to nymea enable a specific device or service, commonly referred to as "things". By default nymea ships with the most commonly used integrations but there is a large list of supported integrations which can be installed depending on the needs of a certain nymea setup.</p>
  <p>This section shows a list of currently supported integrations. If support for a certain device or online service is not in this list, nymea can still be extended for it by developing such an integration. Please see the developers section and don't hesitate to join <a href="https://forum.nymea.io" target="_blank" rel="noopener">our forum</a> to meet other users and developers and help creating new integrations.</p>

  <!-- <div class="category-description">
    <slot />
  </div> -->

  <!-- <div class="filter">Filter: 
    {#each Object.entries($params) as [paramKey, paramValue]}
      <div class="filter-item">{paramKey}: {paramValue}</div>
    {/each}
  </div> -->

  <div class="integrations">
    <Tiles>
      {#each $filteredIntegrations as integration}
        <Tile>
          <!-- <a id={getIdFromTitle(integration.title)} href={$url('./' + ($currentCategory !== null ? $currentCategory + '/' : '') + integration.readme.replace('.md', ''))} class="integration"> -->
          <a id={getIdFromTitle(integration.title)} href={$url('./' + integration.readme.replace('.md', ''))} class="integration">
            <div>
              <!-- <img src="img/integrationlogos/{plugin.icon}" alt=""> -->
              <h4>{integration.title}</h4>
              <p>{integration.tagline}</p>
              <div class="meta">
                <!-- <p class="details">{integration.vendorsCount} {integration.vendorsCount === 1 ? 'Vendor' : 'Vendors'}, {integration.thingsCount} {integration.thingsCount === 1 ? 'Thing' : 'Things'}</p> -->
                <ul class="icons">
                  {#if integration.offline === true}
                    <li>
                      <ion-icon name="cloud-offline"></ion-icon>
                    </li>
                  {/if}
                  {#if integration.stability === 'consumer'}
                    <li>
                      <ion-icon name="shield-checkmark"></ion-icon>
                    </li>
                  {/if}
                </ul>
              </div>
            </div>
          </a>
        </Tile>
      {/each}
    </Tiles>
  </div>
</div>
