export const getUTCMilliseconds = (date: Date = new Date()): number => {
  return date.getTime() + date.getTimezoneOffset() * 60000;
};

export const range = (start: number, stop: number, step: number): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
