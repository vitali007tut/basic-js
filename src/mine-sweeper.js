const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));

for (let i = 0; i < matrix.length; i++) {
  
  for (let j = 0; j < matrix.length; j++) {

      if (j > 0 && matrix[i][j-1]) {
          arr[i][j] += 1
      }
      
      if (j < matrix.length && matrix[i][j + 1]) {
          arr[i][j] += 1
      }
      
      if (i > 0 && matrix[i-1][j]) {
          arr[i][j] += 1
      }
      
      if (i < matrix.length - 1 && matrix[i+1][j]) {
          arr[i][j] += 1
      }
      
      // диагональ низ право
      if (j > 0 && i > 0 && matrix[i-1][j-1]) {
          arr[i][j] += 1
      }
      
      // диагональ верх право
      if (j > 0 && i < matrix.length - 1 && matrix[i+1][j-1]) {
          arr[i][j] += 1
      }
      
      // диагональ лево верх
      if (j < matrix.length && i < matrix.length - 1 && matrix[i+1][j+1]) {
          arr[i][j] += 1
      }
      
      // диагональ лево низ
      if (j < matrix.length && i > 0 && matrix[i-1][j+1]) {
          arr[i][j] += 1
      }
  }
}

return arr
}

module.exports = {
  minesweeper
};
