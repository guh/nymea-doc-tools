import { Writable, writable } from 'svelte/store';
import type { FilterItem } from './_types';

export const filterItems: Writable<FilterItem[]> = writable([]);
