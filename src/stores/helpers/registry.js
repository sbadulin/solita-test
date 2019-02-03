import { get, set, remove } from "mobx";

export const updateItemsInRegistry = (items, registry) => {
  return new Promise(resolve => {
    Object.values(items).forEach(item => {
      const { id } = item;
      const registeredItem = get(registry, id);
      if (registeredItem) {
        Object.assign(registeredItem, item);
      } else {
        set(registry, id, item);
      }
    });
    resolve(items);
  });
};

export const removeItemsFromRegistry = (itemIds, registry) => {
  return new Promise(resolve => {
    itemIds.forEach(itemId => {
      remove(registry, itemId);
    });
    resolve(itemIds);
  });
};
