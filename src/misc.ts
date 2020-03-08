// TODO: Confirm that babel-plugin-dev-expression works with this.
/**
 * s
 * @param condition The condition to evaluate.
 * @param message The message to print in the console during development.
 */
export function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error('Invariant Violation: ' + message);
  }
}

export const isIE = (userAgent: string = window.navigator.userAgent) => {
  const msie = userAgent.includes('MSIE ');
  const msie11 = userAgent.includes('Trident/');

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;

  return msie || msie11;
};
