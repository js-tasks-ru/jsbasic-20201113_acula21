/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...

  let a = 0;
  for (let key in salaries) {
    !!(+salaries[key]) === true ? salaries[key] === undefined ? a = 0 : a += salaries[key] : a;
  }
  return a;
}

