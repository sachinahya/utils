export const withRetry = <T>(
  fn: () => Promise<T>,
  retriesLeft: number = 5,
  interval: number = 1000
) => {
  return new Promise<T>((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }
          // Passing on "reject" is the important part
          withRetry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};
