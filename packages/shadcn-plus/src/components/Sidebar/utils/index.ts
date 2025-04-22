import { nanoid } from "nanoid";
import { ISidebarItemType } from "../type";

export const initializeKeys = (items: ISidebarItemType[]): ISidebarItemType[] => {
  return items.map(item => {
    const base = { ...item, key: item.key || nanoid() };

    if ('type' in item &&  item.type === 'group') {
      return {
        ...base,
        items: initializeKeys(item.items),
      };
    }

    if ('children' in item && Array.isArray(item.children)) {
      return {
        ...base,
        children: initializeKeys(item.children),
      };
    }

    return base;
  });
}