import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.basic();
  }

  async basic() {
    await this.element();
    this.initCarousel();
  }

  element() {
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = '<div class="carousel__arrow carousel__arrow_right">' +
      '<img src="/assets/images/icons/angle-icon.svg" alt="icon">' +
      '</div>' +
      '<div class="carousel__arrow carousel__arrow_left">' +
      '<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">' +
      '</div>'

    this.elem_two = document.createElement('div')
    this.elem_two.classList.add('carousel__inner');

    this.slides.forEach(element => {
      let image = `/assets/images/carousel/${element.image}`;

      this.elem_two.innerHTML += '<div class="carousel__slide" data-id="penang-shrimp">' +
        '<img src="' + image + '" class="carousel__img" alt="slide">' +
        '<div class="carousel__caption">' +
        '<span class="carousel__price">€' + element.price.toFixed(2) + '</span>' +
        '<div class="carousel__title">' + element.name + '</div>' +
        '<button type="button" class="carousel__button">' +
        '<img src="/assets/images/icons/plus-icon.svg" alt="icon">' +
        '</button>' +
        '</div>' +
        '</div>';

      this.elem.appendChild(this.elem_two);
      this.elem.querySelectorAll('.carousel__button').forEach((el, ind) => {

        el.addEventListener('click', () => {
          let event = new CustomEvent("product-add", {
            detail: this.slides[ind].id,
            bubbles: true
          })
          this.elem.querySelector('.carousel__button').dispatchEvent(event);
        });

      });
    });
  }

  initCarousel() {
    let position = 0;
    let list = document.querySelector('.carousel__inner');
    let width = list.offsetWidth;
    let right = document.querySelector('.carousel__arrow_right');
    let left = document.querySelector('.carousel__arrow_left');
    left.style.display = 'none';

    left.onclick = function() {
      position -= width;
      list.style.transform = 'translateX(' + position*-1 + 'px)';
      if (position !== width*4)  right.style.display = '';
    
      if (position === 0) left.style.display = 'none';
      
    };
    right.onclick = function() {
      position += width;
      list.style.transform = 'translateX(-' + position + 'px)';
      if (position > width*2) right.style.display = 'none';

      if (position > 0) left.style.display = '';
    };
  }
}
