/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  return str !== '' ? str[0].toUpperCase() + str.slice(1) : '';
}
