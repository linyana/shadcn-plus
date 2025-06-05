import { nanoid } from 'nanoid';
import { ISidebarItemType } from '../type';

export const initializeKeys = (
  items: ISidebarItemType[],
): ISidebarItemType[] => {
  return items.map((item) => {
    const base = {
      ...item,
      key: item.key || nanoid(),
    };

    if ('type' in item && item.type === 'group') {
      return {
        ...base,
        children: initializeKeys(item.children),
      };
    }

    if (
      'children' in item &&
      Array.isArray(item.children)
    ) {
      return {
        ...base,
        children: initializeKeys(item.children),
      };
    }

    return base;
  });
};

export const findParentKeys = (
  items: ISidebarItemType[],
): string[] => {
  let keys: string[] = [];
  for (const item of items) {
    if ('children' in item && item.children) {
      keys = [
        ...keys,
        item.key as string,
        ...findParentKeys(item.children),
      ];
    }
    if (
      'type' in item &&
      item.type === 'group' &&
      item.children
    ) {
      keys = [
        ...keys,
        ...findParentKeys(item.children),
      ];
    }
  }
  return keys;
};
