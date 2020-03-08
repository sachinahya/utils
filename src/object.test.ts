import { isEmptyObject } from './object';

it('returns false', () => {
  const obj = { name: 'Bob' };
  expect(isEmptyObject(obj)).toBe(false);
});

it('returns true', () => {
  const obj = {};
  expect(isEmptyObject(obj)).toBe(true);
});
