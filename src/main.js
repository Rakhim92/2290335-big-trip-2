import HeaderPresenter from './presenter/header-presenter.js';
import BoardPresenter from './presenter/board-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import PointModel from './models/points-model.js';

const headerContainerElement = document.querySelector('.page-header__container .trip-main');
const pageContainerElement = document.querySelector('.page-main .trip-events');

const pointModel = new PointModel();
const headerPresenter = new HeaderPresenter({container: headerContainerElement});
const boardPresenter = new BoardPresenter({container: pageContainerElement, pointModel});


const mainPresenter = new MainPresenter(headerPresenter, boardPresenter, pointModel);
mainPresenter.init();

