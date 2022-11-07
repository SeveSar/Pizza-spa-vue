export default (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function <T>(this: any, ...args: T[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
