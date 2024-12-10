const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    
  const arrAdd = Array(options.additionRepeatTimes).fill(options.addition === null ? 'null' : options.addition)
  
  const part = str + arrAdd.join(options.additionSeparator?? '|')
  
  const arr = Array(options.repeatTimes).fill(part)
  
return arr.join(options.separator?? '+')
}

module.exports = {
  repeater
};
