export const ensureArray = <T>(item: T | T[]): T[] => (Array.isArray(item) ? item : [item]);

export const sortAlphabeticallyByProperty = <T, K extends keyof T>(prop: K) => (
  a: T,
  b: T
): number => {
  let propA: any = a[prop];
  propA = typeof propA === 'string' ? propA.toUpperCase() : propA;
  let propB: any = b[prop];
  propB = typeof propB === 'string' ? propB.toUpperCase() : propB;

  if (propA < propB) return -1;
  if (propA > propB) return 1;
  return 0; // props are equal
};

export const sortByProp = (...fields: string[]) => {
  return function(a: any, b: any) {
    const l = fields.length;

    for (let i = 0; i < l; i++) {
      let field = fields[i];
      let dir = 1;

      if (field.startsWith('-')) {
        field = field.substring(1);
        dir = -1;
      }

      if (a[field] > b[field]) return dir;
      if (a[field] < b[field]) return -dir;
    }
    return 0;
  };
};

export const groupBy = <T>(
  items: T[],
  props: (keyof T)[],
  aggregators: { [K in keyof T]?: (acc: T[K], item: T[K]) => T[K] },
  countProp?: string
) => {
  const result = items.reduce((acc, val) => {
    const key = props.map(p => val[p]).join('-');
    const elseProps = (Object.keys(val) as (keyof T)[]).filter(p => !props.includes(p));

    const item =
      acc.get(key) ||
      Object.assign(
        {},
        val,
        countProp && { [countProp]: 0 },
        Object.fromEntries(elseProps.map(p => [p, null]))
      );
    elseProps.forEach(p => {
      const fn = aggregators[p];
      fn && (item[p] = fn(item[p], val[p]));
    });
    countProp && item[countProp]++;

    return acc.set(key, item);
  }, new Map());

  return [...result.values()];
};
