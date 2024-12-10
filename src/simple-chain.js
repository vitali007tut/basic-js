const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    this.arr.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number") {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    if (position < 1 || position > this.arr.length){
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr = [
      ...this.arr.slice(0, position - 1),
      ...this.arr.slice(position),
    ];
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = `( ${this.arr.join(" )~~( ")} )`;
    this.arr = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
