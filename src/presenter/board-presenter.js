import SortView from '../view/sort-view';
import EventList from '../view/event-list-view';
import PointView from '../view/event-item-view.js';
import CreationMenu from '../view/form-create-view.js';
import EditMenu from '../view/form-edit-view.js';
import { render, RenderPosition } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  EventListComponent = new EventList();
  CreationMenuComponent = new CreationMenu();
  EditMenuComponent = new EditMenu();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.EventListComponent, this.container);
    render(this.EditMenuComponent, this.EventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.EventListComponent.getElement());
    }

    render(this.CreationMenuComponent, this.container);
  }
}

