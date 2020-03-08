export const pluralize = (num: number, singular: string, plural: string = singular + 's') =>
  num === 1 || num === -1 ? singular : plural;

export const splitPath = (pathname: string): string[] => pathname.split('/').filter(Boolean);

export const stripTrailingSlash = (str: string, slash: string = '/'): string =>
  str.lastIndexOf(slash) === str.length - 1 ? str.substring(0, str.length - 1) : str;

export const getInitials = (name: string): string => {
  name = name.toUpperCase();
  const spaceIndex = name.indexOf(' ');
  return name[0] + (spaceIndex > -1 ? name[spaceIndex + 1] : '');
};

export const stringToHash = (str: string): number => {
  let hash = 0;
  const strLen = str.length;
  if (!strLen) return hash;
  for (let i = 0; i < strLen; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const stringToHslColor = (str: string, s: number, l: number): string => {
  const h = stringToHash(str) % 360;
  return `hsl(${h},${s}%,${l}%)`;
};
