// import { render, RenderPosition } from './render.js';
// import HeaderInfo from './view/header-info-view.js';
// import HeaderFilters from './view/filter-view.js';
import MainPresenter from './presenter/main-presenter.js';

// // Содержимое хедера
// const pageHeaderContainer = document.querySelector('.page-header__container');
// const tripMainElement = pageHeaderContainer.querySelector('.trip-main');
// const filterContainer = pageHeaderContainer.querySelector('.trip-controls__filters');


const mainPresenter = new MainPresenter;
mainPresenter.init();

// render(new HeaderInfo(), tripMainElement, RenderPosition.AFTERBEGIN);
// render(new HeaderFilters, filterContainer);


