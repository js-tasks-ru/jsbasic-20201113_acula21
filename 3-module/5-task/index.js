/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  // ваш код...

  let arr = [], obj = {};
  let num = str.replace(/[^0-9\-\+\s\.\,]/g, '').replace(/ {2,}/g, ',').split(',');
  for(let a of num)
    if(!isNaN(a) && '' !== a) arr.push(+a);

  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  return obj;
}
