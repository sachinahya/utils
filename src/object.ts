export const objectFilter = <T>(
  items: Record<string, T>,
  predicate: (entry: [string, T]) => boolean
): Record<string, T> => {
  return Object.entries(items).reduce<Record<string, T>>((result, item) => {
    if (predicate(item)) result[item[0]] = item[1];
    return result;
  }, {});
};

export const isEmptyObject = <T>(item: T): boolean => Object.keys(item).length === 0;

export const arrayToKeyedObject = <T extends Record<string, any>>(
  items: T[],
  key: string = 'id'
): Record<string, any> => {
  return Object.fromEntries(items.map(item => [item[key], item]));
};

export const shallowEqual = <T extends {}>(objA: T, objB: T): boolean => {
  for (const key in objA) {
    if (!(key in objB) || objA[key] !== objB[key]) {
      return false;
    }
  }
  for (const key in objB) {
    if (!(key in objA) || objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};
