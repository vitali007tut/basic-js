const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n
    .toString()
    .split("")
    .map((x) => Number(x));
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];

    if (element < arr[i + 1]) {
      result = [...result, ...arr.slice(i + 1)];
      return Number(result.join(""));
    }

    if (element > arr[i + 1]) {
      result.push(element);
      result = result.concat(arr.slice(i + 2));
      return Number(result.join(""));
    }

    result.push(element);
  }
}

module.exports = {
  deleteDigit,
};
