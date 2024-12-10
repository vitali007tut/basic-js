const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!")

  const result = [];
  const actions = ['--discard-prev','--double-prev', '--double-next', '--discard-next']
  for (let i = 0; i < arr.length; i += 1) {
    const index = actions.indexOf(arr[i])
    
    if (index === -1) {
      result.push(arr[i])
    } else {

      if ((index === 0 || index === 1) && i !== 0) {
        switch (index) {
          case 0: // --discard-prev
            if (arr[i-2] !== '--discard-next')
            result.pop()
            break;
            default: // --double-prev
            if (arr[i-2] !== '--discard-next') {
              const prev = result.at(-1)
              result.push(prev)
            }
            break;
        }
      } else if ((index === 2 || index === 3) && i !== arr.length - 1) {
          const next = arr[i + 1]
          i += 1;
          switch (index) {
            case 2:
              result.push(next)
              result.push(next)
          }
      }
    }
  }
  return result;
}

module.exports = {
  transform
};
