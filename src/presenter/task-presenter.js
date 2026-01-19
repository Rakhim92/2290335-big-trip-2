import {render, replace} from '../framework/render.js';
import PointView from '../view/event-item/event-item-view.js';
import EditFormView from '../view/form-edit/form-edit-view.js';

export default class TaskPresenter {
  #taskListContainer = null;

  #taskComponent = null;
  #taskEditComponent = null;

  #task = null;
  #offers = null;
  #destinations = null;

  constructor({taskListContainer}) {
    this.#taskListContainer = taskListContainer;
  }

  init(task, proposals, purposes) {
    this.#task = task;
    this.#offers = proposals;
    this.#destinations = purposes;
    this.#taskComponent = new PointView({
      point: this.#task,
      offers: [...this.#offers.getOfferById(task.type, task.offers)],
      destination: this.#destinations.getDestinationById(task.destination),
      onEditClick: this.#handleEditClick
    });

    this.#taskEditComponent = new EditFormView({
      point: this.#task,
      offers: [...this.#offers.getOfferById(task.type, task.offers)],
      destination: this.#destinations.getDestinationById(task.destination),
      checkedOffers: [...this.#offers.getOfferById(this.#task.type, this.#task.offers)],
      onFormSubmit: this.#handleFormSubmit,
      onFormClose: this.#handleFormClose
    });

    render(this.#taskComponent, this.#taskListContainer);
  }

  #replaceCardToForm() {
    replace(this.#taskEditComponent, this.#taskComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToCard() {
    replace(this.#taskComponent, this.#taskEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
    }
  };

  #handleEditClick = () => {
    this.#replaceCardToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToCard();
  };

  #handleFormClose = () => {
    this.#replaceFormToCard();
  };

}
