const addHeader = (append: boolean) => (name: string, value: string) => (
  init: RequestInit
): RequestInit => {
  // Edge doesn't like passing undefined into the Headers constructor.
  const newHeaders = new Headers(init.headers || {});
  append ? newHeaders.append(name, value) : newHeaders.set(name, value);
  return { ...init, headers: newHeaders };
};

export const appendHeader = addHeader(true);
export const setHeader = addHeader(false);

export const addBearerTokenHeader = (token: string) =>
  setHeader('Authorization', 'Bearer ' + token);
