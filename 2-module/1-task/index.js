/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  return salaries.John || salaries.Ann || salaries.Pete ? salaries.John + salaries.Ann + salaries.Pete : 0;
}
