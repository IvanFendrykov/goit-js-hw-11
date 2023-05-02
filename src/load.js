export default class PageLoadStatus {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};

    refs.pageLoadStatus = document.querySelector(selector);
    refs.ellips = document.querySelector('.loader-ellips');
    refs.scrollLast = document.querySelector('.scroll-last');
    refs.scrollError = document.querySelector('.scroll-error');

    return refs;
  }

  show() {
    this.refs.pageLoadStatus.classList.remove('is-hidden');
  }

  hide() {
    this.refs.pageLoadStatus.classList.add('is-hidden');
  }

  enable() {
    this.refs.ellips.classList.add('is-hidden');
    this.refs.scrollLast.classList.add('is-hidden');
    this.refs.scrollError.classList.add('is-hidden');
  }

  loadingShow() {
    this.refs.ellips.classList.remove('is-hidden');
    this.refs.scrollLast.classList.add('is-hidden');
    this.refs.scrollError.classList.add('is-hidden');
  }

  loadingHide() {
    this.refs.ellips.classList.add('is-hidden');
  }

  lastElemShow() {
    this.refs.scrollLast.classList.remove('is-hidden');

    this.refs.ellips.classList.add('is-hidden');
    this.refs.scrollError.classList.add('is-hidden');
  }

  lastElemHide() {
    this.refs.scrollLast.classList.add('is-hidden');
  }

  errorShow() {
    this.refs.scrollError.classList.remove('is-hidden');

    this.refs.ellips.classList.add('is-hidden');
    this.refs.scrollLast.classList.add('is-hidden');
  }

  errorHide() {
    this.refs.scrollLast.classList.add('is-hidden');
  }
}
