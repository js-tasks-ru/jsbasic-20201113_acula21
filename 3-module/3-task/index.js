/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {

  return str.split('-').map((lol, ror) => ror === 0 ? lol : lol[0].toUpperCase() + lol.slice(1)).join('');
}
