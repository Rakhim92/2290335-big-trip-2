export default class MainPresenter {
  constructor(headerPresenter, boardPresenter, pointModel) {
    this.headerPresenter = headerPresenter;
    this.boardPresenter = boardPresenter;
    this.pointModel = pointModel;
  }

  init () {
    this.headerPresenter.init();
    this.boardPresenter.init();
  }
}

