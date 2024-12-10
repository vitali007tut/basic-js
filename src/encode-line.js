const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split("");
  let count = 1;
  const result = [];

  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    const next = array[i + 1];

    if (element === next) {
      count += 1;
    } else {
      result.push(count === 1 ? element : `${count}${element}`);
      count = 1;
    }
  }
  result.push(count === 1 ? array.at(-1) : `${count}${array.at(-1)}`);

  return result.join("");
}

module.exports = {
  encodeLine,
};
