import { createElement } from '../../render.js';
import { createEditMenuTemplate } from './form-edit-template.js';

export default class EditMenu {
  constructor({point, offers, destination, checkedOffers}) {
    this.point = point;
    this.offers = offers;
    this.destination = destination;
    this.checkedOffers = checkedOffers;
  }

  getTemplate() {
    return createEditMenuTemplate(this.point, this.offers, this.destination, this.checkedOffers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
