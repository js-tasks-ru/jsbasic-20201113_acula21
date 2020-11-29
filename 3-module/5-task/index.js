/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = [];
  let num = str.replace(/[a-zа-яё\+\s]/g, ',').split(',');
  for(let a of num)
    if(!isNaN(a) && '' !== a) arr.push(+a);

  return {min: Math.min(...arr), max: Math.max(...arr)};
}
