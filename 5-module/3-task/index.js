const { ConsoleReporter } = require("jasmine");

function initCarousel() {
    let position = 0;
    let list = document.querySelector('.carousel__inner');
    let width = list.offsetWidth;
    let right = document.querySelector('.carousel__arrow_right');
    let left = document.querySelector('.carousel__arrow_left');
    left.style.display = 'none';
    

    left.onclick = function() {
      position += width;
      
      if (position < 0) {  
        left.style.display = '';
        right.style.display = '';
      }
      if (position === 0) left.style.display = 'none';

      list.style.transform = 'translateX(' + position + 'px)';
    };

    right.onclick = function() {
      position -= width;
      right.style.display = 'none' ;

      if (position <= 0 && position > -2964) {
        left.style.display = '';
        right.style.display = '';
      } 

      list.style.transform = 'translateX(' + position + 'px)';
    };

}
