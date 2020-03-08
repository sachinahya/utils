import { splitPath } from './string';

it('should return the correct value', () => {
  const split = splitPath('projects/some_id');
  expect(split).toEqual(['projects', 'some_id']);
});

it('should filter out leading and trailing slashes', () => {
  expect(splitPath('/projects/some_id/')).toEqual(['projects', 'some_id']);
});
