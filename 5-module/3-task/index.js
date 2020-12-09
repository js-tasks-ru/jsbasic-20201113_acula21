const { ConsoleReporter } = require("jasmine");

function initCarousel() {
    let position = 0;
    let list = document.querySelector('.carousel__inner');
    let width = list.offsetWidth;
    let right = document.querySelector('.carousel__arrow_right');
    let left = document.querySelector('.carousel__arrow_left');
    if (position === 0) left.style.display = 'none';
    

    left.onclick = function() {
      position += width;
      if(position === -2964) right.style.display = '' ;
      if(position < 0) left.style.display = '';
      if(position === 0) left.style.display = 'none';

      list.style.transform = 'translateX(' + position + 'px)';
    };

    right.onclick = function() {
      position -= width;
      if(position === -2964) right.style.display = 'none' ;
      if(position < 0) left.style.display = '';
      if(position === 0) left.style.display = 'none';

      list.style.transform = 'translateX(' + position + 'px)';
    };

}
