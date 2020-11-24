/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  str.toLowerCase();
  return str.indexOf('xxx'.toLowerCase()) !== -1 || str.indexOf('1XbeT') !== -1 ? true : false;
}
