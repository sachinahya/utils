import { Context, useContext } from 'react';

export const makeContextConsumerHook = <T extends unknown>(
  Context: Context<T>
): (() => Exclude<T, undefined>) => {
  return () => {
    const ctx = useContext(Context);
    if (ctx == null) throw new Error('No context.');
    return ctx as Exclude<T, undefined>;
  };
};
