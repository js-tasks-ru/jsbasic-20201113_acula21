import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    let img = `/assets/images/products/${product.image}`
    this.elem.innerHTML = '<div class="card__top">' +
                            '<img src="'+ img + '" class="card__image" alt="product">' +
                            '<span class="card__price">€' + product.price.toFixed(2) + '</span>' +
                          '</div>' +
                          '<div class="card__body">' +
                            '<div class="card__title">' + product.name + '</div>' +
                            '<button type="button" class="card__button">' +
                              '<img src="/assets/images/icons/plus-icon.svg" alt="icon">' +
                            '</button>' +
                          '</div>';

    this.elem.querySelector('.card__button').addEventListener('click', () => {
      let event = new CustomEvent("product-add", { 
        detail: this.product.id,
        bubbles: true 
      })
      this.elem.querySelector('.card__button').dispatchEvent(event);
    })
  }
}
