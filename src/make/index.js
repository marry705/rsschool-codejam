module.exports = function make(...arg) {
  const num = [];
  const handler = (...arg) => {
    if (typeof arg[0] != 'function') {
      num.push(...arg);
      return handler;
    }
    else return num.reduce((accum, element) => arg[0](accum, element));
  }
  return handler(...arg);
}