/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  // ваш код...
  let num = str.replace(/[a-zа-яё\+\s]/g, ',').split(',');
  return {
    min: Math.min(...num),
    max: Math.max(...num)
  };
}
