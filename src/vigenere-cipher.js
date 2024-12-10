const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

  encrypt(message, key) {
    if (arguments.length < 2) throw new Error('Incorrect arguments!')
    if ((typeof arguments[0] !== 'string') || (typeof arguments[1] !== 'string')) throw new Error('Incorrect arguments!')
    const result = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i].toUpperCase())) {
        const M = this.alphabet.indexOf(message[i].toUpperCase());
        const K = this.alphabet.indexOf(key[j % key.length].toUpperCase());
        const indC = (M + K) % 26;
        result.push(this.alphabet.at(indC));
        j++;
      } else {
        result.push(message[i]);
      }
    }
    if (this.direct) return result.join("");
    return result.reverse().join("");
  }

  decrypt(message, key) {
    if (arguments.length < 2) throw new Error('Incorrect arguments!')
    if ((typeof arguments[0] !== 'string') || (typeof arguments[1] !== 'string')) throw new Error('Incorrect arguments!')
    const result = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i].toUpperCase())) {
        const M = this.alphabet.indexOf(message[i].toUpperCase());
        const K = this.alphabet.indexOf(key[j % key.length].toUpperCase());
        const indC = (M - K) % 26;
        result.push(this.alphabet.at(indC));
        j++;
      } else {
        result.push(message[i]);
      }
    }
    if (this.direct) return result.join("");
    return result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
