const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';

  try {
    const mounth = date.getMonth();
    date.getUTCDate();
    switch (true) {
      case mounth >= 2 && mounth <= 4:
        return 'spring'
      case mounth >= 5 && mounth <= 7:
        return 'summer'
      case mounth >= 8 && mounth <= 10:
        return 'autumn'
      default:
        return 'winter'
    }
  } catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
};
