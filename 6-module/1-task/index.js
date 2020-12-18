/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.elem.innerHTML = '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>';

    for (let r of rows) {
      this.elem.innerHTML += '<tr><td>' + r.name + '</td><td>' + r.age + '</td><td>' + r.salary + '</td><td>' + r.city + '</td><td><button>X</button></td></tr>';
    }
    
    this.elem.innerHTML += '</tbody>';

    this.elem.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        this.onRemoveButtonClick(e);
      }
    });
  }

  onRemoveButtonClick(e) {
    const el = e.target;
    el.closest('tr').parentElement.removeChild(el.closest('tr'));
  }
}