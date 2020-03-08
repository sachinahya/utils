const shortToLongHex = (hex: string): string =>
  hex
    .split('')
    .map(s => s + s)
    .join('');

export const getContrast = (hexColor: string): { isDark: boolean; isLight: boolean } => {
  // If a leading # is provided, remove it
  if (hexColor.startsWith('#')) {
    hexColor = hexColor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexColor.length === 3) {
    hexColor = shortToLongHex(hexColor);
  }

  // Convert to RGB value
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const isDark = yiq >= 128;

  return { isDark, isLight: !isDark };
};
