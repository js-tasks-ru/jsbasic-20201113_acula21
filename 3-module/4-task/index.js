/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...

  let arr = [];
  for(let a of users)
    if(age >= a.age) arr.push(a.name + ', ' + a.balance);

  return arr.join('\n');
}
