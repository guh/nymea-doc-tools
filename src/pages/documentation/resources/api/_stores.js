import { derived, readable, writable } from 'svelte/store';
// import { api } from './api';
import { api } from './api-highlighted';

function createCurrent() {
  const { subscribe, set } = writable(null);

  return {
    subscribe,
    set: (current) => set(userReadableToSnakeCase(current)),
    reset: () => set(null)
  };
}

function userReadableToSnakeCase(input) {
  return input && input.replace(' ', '-').toLowerCase();
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

function getLabel(key) {
  return key.charAt(0).toUpperCase() + key.substring(1, key.length);
}

function toNamespace(key) {
  return key.split('.')[0];
}

function createIdFromKey(key) {
  return key[0].toLowerCase() + key.slice(1, key.length).replace('.', '').replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function getCode(value) {
  if (Array.isArray(value)) {
    return `[\n${value.map((item) => `  "${item}"`).join(',\n')}\n]`;
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    // Object.entries(value).forEach(([propertyKey, propertyValue]) => {
    //   if (propertyValue.includes('$ref:')) {
    //     value[propertyKey] = `<a href="#${createIdFromKey(propertyKey)}">${propertyValue}</a>`;
    //   } else {
    //     value[propertyKey] = propertyValue;
    //   }
    // });
    return JSON.stringify(value, null, 2);
  }
  return '';
}

function getReferences(refs, value) {
  if (typeof value === 'string') {
    if (value.includes('$ref:')) {
      const key = value.replace('$ref:', '');
      console.log('getReferences', key, refs, value);
      refs = [
        ...refs,
        { 
          label: key,
          link: `#${createIdFromKey(key)}`
        }
      ];
    }
  } else if (Array.isArray(value)) {
    value.forEach((valueItem) => {
      refs = getReferences(refs, valueItem);
    });
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    Object.values(value).forEach((valueItem) => {
      refs = getReferences(refs, valueItem);
    });
  }
  return refs;
}

function getAllReferences(refs, value, flattenedApi) {
  const newRefs = getReferences(refs, value);
  if (newRefs.length > 0) {
    refs = [
      ...refs,
      ...newRefs.map((reference) => {
        return getAllReferences(newRefs, flattenedApi[reference.label], flattenedApi);
      })
    ];
  }
  return refs;
}

function getDeprecations(value) {
  if (Object.prototype.toString.call(value) === '[object Object]') {
    return Object.entries(value)
      .filter(([propertyKey]) => propertyKey.substring(0, 2) === 'd:')
      .map(([propertyKey]) => propertyKey.substring(2, propertyKey.length))
      .sort()
      .join(', ');
  }
  return [];
}

function sortLabel({ label: labelA }, { label: labelB }) {
  return labelA.localeCompare(labelB);
}

function getApiItems(object) {
  return Object.entries(object).map(([key, value]) => {
    return {
      id: createIdFromKey(key),
      label: key,
      link: `#${createIdFromKey(key)}`,
      code: getCode(value),
      description: value.hasOwnProperty('description') ? value.description.replace('\n', '<br />') : '',
      deprecated: value.hasOwnProperty('deprecated') ? value.deprecated : '',
      params: value.hasOwnProperty('params') ? JSON.stringify(value.params, null, 2) : '',
      returns: value.hasOwnProperty('returns') ? JSON.stringify(value.returns, null, 2) : '',
      references: getReferences([], value).sort(sortLabel),
      deprecations: getDeprecations(value)
    };
  });
}


// API Types

export const currentApiType = createCurrent();

export const apiTypes = readable([], function start(set) {
  const { version, ...apiKeys } = api;
  const types = Object.keys(apiKeys)
    .map((key) => {
      return {
        label: getLabel(key)
      };
    });

  set(types);

	return function stop() {};
});


// API Namespaces

export const currentApiNamespace = createCurrent();

export const apiNamespaces = readable([], function start(set) {
  const { methods, notifications } = api;
  const namespaceKeys = [
    ...methods.map(({ label }) => toNamespace(label)),
    ...notifications.map(({ label }) => toNamespace(label))
    // ...Object.keys(methods).map(toNamespace),
    // ...Object.keys(notifications).map(toNamespace)
  ].filter(onlyUnique);
  const namespaces = namespaceKeys
    .map((key) => {
      return {
        label: getLabel(key)
      };
    });

  set(namespaces);

	return function stop() {};
});


// Methods

// export const methods = readable([], function start(set) {
//   const methods = getApiItems(api.methods);
//   set(methods);
// 	return function stop() {};
// });
// export const methods = derived([currentApiNamespace], ([$currentApiNamespace]) => {
//   const methods = getApiItems(api.methods);
//   const filteredMethods = [
//     ...methods.filter((methodValue) => !$currentApiNamespace || $currentApiNamespace === methodValue.label.split('.')[0].toLowerCase())
//   ];
//   console.log('_stores:methods - methods updated!', filteredMethods);
//   return filteredMethods;
// });

export const methods = derived([currentApiNamespace], ([$currentApiNamespace]) => {
  const methods = api.methods;
  return methods.filter((methodValue) => !$currentApiNamespace || $currentApiNamespace === methodValue.label.split('.')[0].toLowerCase());
});


// Notifications

// export const notifications = readable([], function start(set) {
//   const notifications = getApiItems(api.notifications);
//   set(notifications);
// 	return function stop() {};
// });
export const notifications = derived([currentApiNamespace], ([$currentApiNamespace]) => {
  // const notifications = getApiItems(api.notifications);
  const notifications = api.notifications;
  return notifications.filter((notificationValue) => !$currentApiNamespace || $currentApiNamespace === notificationValue.label.split('.')[0].toLowerCase());
});

// References
export const refs = derived([currentApiNamespace, currentApiType, methods, notifications], ([$currentApiNamespace, $currentApiType, $methods, $notifications]) => {
  let references = [];

  const flattenedApi = Object.entries(api).reduce((flattenedApi, [apiTypeKey, apiTypeValue]) => {
    if (apiTypeKey === 'version') {
      return flattenedApi;
    }
    return flattenedApi = {
      ...flattenedApi,
      ...Object.entries(apiTypeValue).reduce((apiTypeValue, [, value]) => {
        apiTypeValue[value.label] = value;
        return apiTypeValue;
      }, {})
    }
  }, {});

  // methods
  if (!$currentApiType || $currentApiType === 'methods') {
    references = [
      ...references,
      ...$methods.reduce((references, method) => {
        if ($currentApiNamespace === method.label.split('.')[0].toLowerCase()) {
          method.references.forEach((reference) => {
            if (references.indexOf(reference.label) === -1) {
              references.push(reference.label);
            }
          });
        }
        return references;
      }, [])
    ];
  }

  // notifications
  if (!$currentApiType || $currentApiType === 'notifications') {
    references = [
      ...references,
      ...$notifications.reduce((references, notification) => {
        if ($currentApiNamespace === notification.label.split('.')[0].toLowerCase()) {
          notification.references.forEach((reference) => {
            if (references.indexOf(reference.label) === -1) {
              references.push(reference.label);
            }
          });
        }
        return references;
      }, [])
    ];    
  }

  // types
  // let newReferences = [];
  // // do {
  //   newReferences = references
  //     .map((reference) => {
  //       console.log('reference - 1', reference, reference.replace('<a[^>]*>(.*?)</a>', '$1'));
  //       // reference = reference.replace('<a[^>]*>(.*?)</a>', '$1');
  //       reference = reference.replace(/<a\b[^>]*>/i, '').replace(/<\/a>/i, '');
  //       console.log('reference - 2', reference);
  //       // const startIndex = reference.indexOf('<a ');
  //       // const endIndex = reference.indexOf('</a>');
  //       // reference = startIndex !== -1 && endIndex !== -1 ? reference.substring(startIndex + 5, endIndex) : reference;
  //       // console.log('reference', reference, reference.substring(startIndex + 5, endIndex), flattenedApi, flattenedApi[reference.substring(startIndex + 5, endIndex)]);
  //       const { references: typeReferences } = flattenedApi[reference];
  //       // only get new references not found in already created references
  //       return typeReferences
  //         .filter((typeReference) => {
  //           return references.findIndex((currentReference) => currentReference === typeReference) === -1;
  //         });
  //     })
  //     .reduce((flattenedArray, currentArray) => (flattenedArray.concat(currentArray)), []);

  //   newReferences = newReferences.filter((currentReference, index) => newReferences.findIndex((duplicateReference) => duplicateReference.label === currentReference.label) === index);
  //   references = [
  //     ...references,
  //     ...newReferences.map((newReference) => newReference.label)
  //   ].sort((referenceA, referenceB) => referenceA.localeCompare(referenceB));
  // } while (newReferences.length > 0);
  
  
  // console.log('types', newReferences);

  // references
  // console.log('references - flattenedApi', flattenedApi);
  // const newReferences = references.forEach((reference) => {
  //   const value = flattenedApi[reference];
  //   console.log('reference', reference, value);
  // });
  // console.log('references', references);

  return references;
});


// Enums

export const enums = derived([refs, currentApiNamespace], ([$refs, $currentApiNamespace]) => {
  // const enums = getApiItems(api.enums);
  const enums = api.enums;
  return enums.filter((enumValue) => !$currentApiNamespace || $refs.indexOf(enumValue.label) !== -1);
});


// Flags

export const flags = derived([refs, currentApiNamespace], ([$refs, $currentApiNamespace]) => {
  // const flags = getApiItems(api.flags);
  const flags = api.flags;
  return flags.filter((flagValue) => !$currentApiNamespace || $refs.indexOf(flagValue.label) !== -1);
});


// Types

export const types = derived([refs, currentApiNamespace], ([$refs, $currentApiNamespace]) => {
  // const types = getApiItems(api.types);
  const types = api.types;
  return types.filter((typeValue) => !$currentApiNamespace || $refs.indexOf(typeValue.label) !== -1);
});


// Api

export const filteredApi = derived([apiTypes, currentApiType, apiNamespaces, currentApiNamespace, methods, notifications], ([$apiTypes, $currentApiType, $apiNamespaces, $currentApiNamespace, $methods, $notifications]) => {
  let filteredApi = api;

  if (api.hasOwnProperty($currentApiType)) {
    filteredApi = { [$currentApiType]: api[$currentApiType] };
  }

  let references = [];

  const flattenedApi = Object.entries(api).reduce((flattenedApi, [apiTypeKey, apiTypeValue]) => {
    if (apiTypeKey === 'version') {
      return flattenedApi;
    }
    return flattenedApi = {
      ...flattenedApi,
      ...apiTypeValue
    }
  }, {});

  if (!$currentApiType || $currentApiType === 'methods') {
    references = [
      ...references,
      ...$methods.reduce((references, method) => {
        if ($currentApiNamespace === method.label.split('.')[0].toLowerCase()) {
          method.references.forEach((reference) => {
            if (references.indexOf(reference.label) === -1) {
              references.push(reference.label);
            }
          });
        }
        return references;
      }, [])
    ];
  }

  if (!$currentApiType || $currentApiType === 'notifications') {
    references = [
      ...references,
      ...$notifications.reduce((references, notification) => {
        if ($currentApiNamespace === notification.label.split('.')[0].toLowerCase()) {
          notification.references.forEach((reference) => {
            if (references.indexOf(reference.label) === -1) {
              references.push(reference.label);
            }
          });
        }
        return references;
      }, [])
    ];    
  }

  // references = {
  //   ...references,
  //   ...$methods.reduce((references, method) => {
  //     method.references.forEach((reference) => {
  //       if (!references.hasOwnProperty(reference)) {
  //         references[reference.label] = flattenedApi[reference.label];
  //       }
  //     });
  //     return references;
  //   }, {})
  // };

  // references = {
  //   ...references,
  //   ...$notifications.reduce((references, notification) => {
  //     notification.references.forEach((reference) => {
  //       if (!references.hasOwnProperty(reference)) {
  //         references[reference.label] = flattenedApi[reference.label];
  //       }
  //     });
  //     return references;
  //   }, {})
  // };

  // Object.entries(filteredApi).map(([key, value]) => {
  //   console.log('filteredApi - key, value', key, value);
  //   switch (key) {
  //     case 'enums':
  //       break;
  //     case 'flags':
  //       break;
  //     case 'types':
  //       break;
  //     case 'methods':

  //       break;
  //     case 'notifications':
  //       break;
  //     default:
  //       break;
  //   }
  // });

  const test = {
    // enums: references.reduce((enums, reference) => {
    //   if (flattenedApi.hasOwnProperty(reference)) {
    //     enums[reference] = flattenedApi[reference];
    //   }
    //   return enums;
    // }, {}),
    // flags: references.reduce((flags, reference) => {
    //   if (flattenedApi.hasOwnProperty(reference)) {
    //     flags[reference] = flattenedApi[reference];
    //   }
    //   return flags;
    // }, {}),
    // methods: references.reduce((methods, reference) => {
    //   if (flattenedApi.hasOwnProperty(reference)) {
    //     methods[reference] = flattenedApi[reference];
    //   }
    //   return methods;
    // }, {}),
    // notifications: references.reduce((notifications, reference) => {
    //   if (flattenedApi.hasOwnProperty(reference)) {
    //     notifications[reference] = flattenedApi[reference];
    //   }
    //   return notifications;
    // }, {}),
    // types: references.reduce((types, reference) => {
    //   if (flattenedApi.hasOwnProperty(reference)) {
    //     types[reference] = flattenedApi[reference];
    //   }
    //   return types;
    // }, {}),
    enums: Object.entries(filteredApi.enums).filter(([enumKey]) => references.indexOf(enumKey) !== -1),
    flags: Object.entries(filteredApi.flags).filter(([flagKey]) => references.indexOf(flagKey) !== -1),
    methods: Object.entries(filteredApi.methods).filter(([methodKey]) => methodKey.split('.')[0].toLowerCase() === $currentApiNamespace),
    notifications: Object.entries(filteredApi.notifications).filter(([notificationKey]) => notificationKey.split('.')[0].toLowerCase() === $currentApiNamespace),
    types: Object.entries(filteredApi.types).filter(([typeKey]) => references.indexOf(typeKey) !== -1),
    version: filteredApi.version
  };

  return test;
  // const integrations = $integrations.filter((integration) => {
  //   return (
  //       $currentCategory === null
  //       || (
  //         $currentCategory === 'other'
  //           ? integration.categories.length === 0
  //           : integration.categories.find((category) => category === $currentCategory) !== undefined
  //       )
  //     )
  //     && (
  //       $currentTechnology === null
  //       || (
  //         $currentTechnology === 'other'
  //           ? integration.technologies.length === 0
  //           : integration.technologies.find((technology) => technology === $currentTechnology) !== undefined
  //       )
  //     );
  // })
  // .filter((integration) => filterBySearch(integration, $searchInput));

  // return integrations;
});
