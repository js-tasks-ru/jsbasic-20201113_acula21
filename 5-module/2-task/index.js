function toggleText() {
  // ваш код...
  let elem = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  elem.addEventListener('click', () => {
  
    if (text.getAttribute('hidden') === null) 
      text.setAttribute('hidden', '');
    else 
      text.removeAttribute("hidden");
    
  })
}
