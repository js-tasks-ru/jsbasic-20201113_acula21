/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  // ваш код...
  let bool = true;
  for (let a in obj) {
    if(a !== undefined) bool = false;
  }
  return bool;
}
