import AbstractView from '../../framework/view/abstract-view.js';
import { createEditFormTemplate } from './form-edit-template.js';

export default class EditFormView extends AbstractView {
  #handleFormSubmit = null;
  constructor({point, offers, destination, checkedOffers, onFormSubmit}) {
    super();
    this.point = point;
    this.offers = offers;
    this.destination = destination;
    this.checkedOffers = checkedOffers;
    this.#handleFormSubmit = onFormSubmit;
    // this.element.querySelector('.event event--edit').addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createEditFormTemplate(this.point, this.offers, this.destination, this.checkedOffers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
