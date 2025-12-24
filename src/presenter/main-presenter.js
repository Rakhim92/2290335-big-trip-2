import HeaderPresenter from './header-presenter.js';
import BoardPresenter from './board-presenter.js';

// Содержимое хедера
const pageHeaderContainer = document.querySelector('.page-header__container');
const tripMainElement = pageHeaderContainer.querySelector('.trip-main');

// Основное содержимое
const pageMainElement = document.querySelector('.page-main');
const tripEventsElement = pageMainElement.querySelector('.trip-events');

const headerPresenter = new HeaderPresenter({container: tripMainElement});
const boardPresenter = new BoardPresenter({container: tripEventsElement});

export default class MainPresenter {
  init () {
    headerPresenter.init();
    boardPresenter.init();
  }
}

