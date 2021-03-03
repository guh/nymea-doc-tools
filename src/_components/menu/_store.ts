import { Readable, derived, Writable, writable } from 'svelte/store';
import { params } from '@sveltech/routify';
import type { MenuItem } from './_types';

function getFlattenedMenuItems(menuItems: MenuItem[]) {
  return menuItems.reduce((flattenedMenuItems, item) => {
    flattenedMenuItems = [
      ...flattenedMenuItems,
      item
    ];

    if (Array.isArray(item.children)) {
      flattenedMenuItems = [
        ...flattenedMenuItems,
        ...getFlattenedMenuItems(item.children)
      ];
    }
    return flattenedMenuItems;
  }, []);
}

export const menuItems: Writable<MenuItem[]> = writable([]);

export const flattenedMenuItems: Readable<MenuItem[]> = derived([menuItems], ([$menuItems]) => {
  console.log('_store menuItems', menuItems);
  return getFlattenedMenuItems($menuItems);
});

// export const menuItemsWithParams = derived([menuItems, params], ([menuItems, params]) => {
//   return {
//     menuItems,
//     params
//   };
// });
