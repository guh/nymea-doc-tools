import { derived, readable, writable } from 'svelte/store';
import { meta } from './_meta.js';

function removeDuplicates(arrayWithoutDuplicates, currentItem) {
  if (!arrayWithoutDuplicates.includes(currentItem)) {
    arrayWithoutDuplicates.push(currentItem);
  }
  return arrayWithoutDuplicates;
}

function sortByName(a, b, attribute = null) {
  if (attribute) {
    return a[attribute].toLowerCase().localeCompare(b[attribute].toLowerCase());
  } else {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
}

function filterBySearch(integration, searchInput) {
  const searchTerms = searchInput.split(' ');
  return searchTerms.reduce((found, searchTerm) => {
    return found = found
      && (
        integration.flattenedVendors.find((vendor) => vendor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) !== undefined ||
        integration.flattenedThings.find((thing) => thing.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) !== undefined ||
        integration.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
  }, true);
}

function snakeCaseToUserReadable(input) {
  return input && input.split('-').map((word) => word.charAt(0).toUpperCase() + word.substr(1)).join(' ');
}

function userReadableToSnakeCase(input) {
  return input && input.replace(' ', '-').toLowerCase();
}

function createCurrent() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    set: (current) => set(userReadableToSnakeCase(current)),
    reset: () => set(null)
  };
}

function getVendors(plugin) {
  return Object.keys(plugin.things).map((vendor) => vendor);
}

function getThings(plugin) {
  return Object.keys(plugin.things).reduce((things, vendor) => { return things = things.concat(plugin.things[vendor]); }, []);
}

// Search
export const searchInput = writable('');

// Categories
export const currentCategory = createCurrent();

export const categories = readable([], function start(set) {
  const categories = meta
    .reduce((categories, plugin) => {
      return categories.concat(plugin.categories);
    }, ['other'])
    .reduce((categories, category) => removeDuplicates(categories, category), [])
    .map((category) => {
      return {
        title: snakeCaseToUserReadable(category),
        count: category === 'other'
          ? meta.filter((integration) => integration.categories.length === 0).length
          : meta.filter((integration) => integration.categories.find((integrationCategory) => {
            return integrationCategory === category;
          })).length
      };
    })
    .sort((categoryA, categoryB) => sortByName(categoryA, categoryB, 'title'));

	set(categories);

	return function stop() {};
});

// Offline 
export const currentOffline = createCurrent();

export const offline = readable([], function start(set) {
  const privacyTypes = [
    {
      label: 'Online'
    },
    {
      label: 'Offline'
    }
  ];

  set(privacyTypes);

  return function stop() {};
});

// Stability
export const currentStability = createCurrent();

export const stabilityTypes = readable([], function start(set) {
  const stabilityTypes = meta
    .reduce((stabilityTypes, plugin) => {
      stabilityTypes.push(plugin.stability);
      return stabilityTypes;
    }, [])
    .reduce((stabilityTypes, stability) => removeDuplicates(stabilityTypes, stability), [])
    .map((stability) => {
      return {
        label: snakeCaseToUserReadable(stability)
      };
    })
    .sort((categoryA, categoryB) => sortByName(categoryA, categoryB, 'label'));

  set(stabilityTypes);

  return function stop() {};
});

// Technologies
export const currentTechnology = createCurrent();

export const technologies = readable([], function start(set) {
  const technologies = meta
    .reduce((technologies, integration) => {
      return technologies.concat(integration.technologies);
    }, ['other'])
    .reduce((technologies, technology) => removeDuplicates(technologies, technology), [])
    .map((technology) => {
      return {
        title: snakeCaseToUserReadable(technology),
        count: technology === 'other'
          ? meta.filter((integration) => integration.technologies.length === 0).length
          : meta.filter((integration) => integration.technologies.find((integrationTechnology) => {
            return integrationTechnology === technology;
          })).length
      };
    })
    .sort((technologyA, technologyB) => sortByName(technologyA, technologyB, 'title'));

	set(technologies);

  return function stop() {};
});

// Integrations
export const integrations = readable([], function start(set) {
  const integrations = meta
    .map((integration) => {
      const flattenedVendors = getVendors(integration);
      const flattenedThings = getThings(integration);
      return {
        ...integration,
        vendorsCount: flattenedVendors.length,
        flattenedVendors,
        thingsCount: flattenedThings.length,
        flattenedThings
      }
    })
    .sort((integrationA, integrationB) => integrationA.title.localeCompare(integrationB.title))

  set(integrations);

  return function stop() {};
});

export const filteredIntegrations = derived([integrations, categories, currentCategory, currentOffline, currentStability, currentTechnology, searchInput], ([$integrations, $categories, $currentCategory, $currentOffline, $currentStability, $currentTechnology, $searchInput]) => {
  const integrations = $integrations.filter((integration) => {
    return (
        $currentCategory === null
        || (
          $currentCategory === 'other'
            ? integration.categories.length === 0
            : integration.categories.find((category) => category === $currentCategory) !== undefined
        )
      )
      && (
        $currentOffline === null
        || (
          $currentOffline === (integration.offline === true ? 'offline' : 'online')
        )
      )
      && (
        $currentStability === null || integration.stability === $currentStability
      )
      && (
        $currentTechnology === null
        || (
          $currentTechnology === 'other'
            ? integration.technologies.length === 0
            : integration.technologies.find((technology) => {
              return technology === $currentTechnology;
            }) !== undefined
        )
      );
  })
  .filter((integration) => filterBySearch(integration, $searchInput));

  return integrations;
});

// Vendors
export const vendors = readable([], function start(set) {
  const integrations = {};
  const vendors = meta
    .reduce((vendors, integration) => {
      Object.keys(integration.things).forEach((vendor) => {
        integrations[vendor] = integration;
      });
      return vendors.concat(Object.keys(integration.things));
    }, [])
    .reduce((vendors, vendor) => removeDuplicates(vendors, vendor), [])
    .map((vendor) => {
      return {
        title: snakeCaseToUserReadable(vendor),
        things: integrations[vendor].things[vendor],
        integration: integrations[vendor]
      };
    })
    .sort((vendorA, vendorB) => sortByName(vendorA, vendorB, 'title'));

	set(vendors);

	return function stop() {};
});

// Things
export const things = derived([vendors], ([$vendors]) => {
  return $vendors
    .reduce((things, vendor) => {
      return things.concat(vendor.things);
    }, [])
    .reduce((things, thing) => removeDuplicates(things, thing), [])
    .map((thing) => {
      return {
        label: snakeCaseToUserReadable(thing),
      };
    })
    .sort((thingA, thingB) => sortByName(thingA, thingB, 'label'));
});
