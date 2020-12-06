/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i],
      status = row.cells[3],
      gender = row.cells[2],
      age = row.cells[1];

    if(gender.textContent === 'm') row.classList.add("male");
    if(gender.textContent === 'f') row.classList.add("female");
    if(age.textContent < 18) row.style.textDecoration = 'line-through';

    if(status.dataset.available === undefined) row.setAttribute('hidden', '');
    if(status.dataset.available === 'true') row.classList.add('available');
    else row.classList.add('unavailable');
  }
}
