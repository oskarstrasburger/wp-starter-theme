import debounce from './utils/debounce';

class Site {
  debounceTime = 300;

  constructor() {
    this.win = window;

    this.bindMethods();
    this.bindEvents();
  }

  bindMethods() {
    this._onResize = this._onResize.bind(this);
    this._onResizeEnd = this._onResizeEnd.bind(this);
  }

  bindEvents() {
    this.win.addEventListener('resize', this._onResize);
    this.win.addEventListener('resize', debounce(this._onResize, this.debounceTime));
  }

  _onResize() {
    // do something on every resize event
  }

  _onResizeEnd() {
    // do something for the last event after 300ms (default timing)
  }
}

new Site();
