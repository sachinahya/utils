import { addBearerTokenHeader, appendHeader, setHeader } from './http';

it('returns a new Headers object and preserve existing values', () => {
  const requestInit: RequestInit = { method: 'get' };
  const newRequestInit = setHeader('X-Test', 'Banana')(requestInit);

  expect(newRequestInit.method).toEqual('get');
  expect(newRequestInit).not.toBe(requestInit);
  expect(newRequestInit.headers).not.toBe(requestInit.headers);
});

it('sets the X-Test header', () => {
  const newRequestInit = setHeader('X-Test', 'Banana')({});
  expect(new Headers(newRequestInit.headers).get('X-Test')).toEqual('Banana');
});

it('append headers', () => {
  const newRequestInit = appendHeader('Accept-Encoding', 'gz')({});
  expect(new Headers(newRequestInit.headers).get('Accept-Encoding')).toEqual('gz');

  const withBrotli = appendHeader('Accept-Encoding', 'br')(newRequestInit);
  expect(new Headers(withBrotli.headers).get('Accept-Encoding')).toEqual('gz, br');
});

it('sets the Authorization header and token', () => {
  const requestInit: RequestInit = { method: 'get' };

  const withToken = addBearerTokenHeader('myToken')(requestInit);
  expect(new Headers(withToken.headers).get('Authorization')).toEqual('Bearer myToken');
});
