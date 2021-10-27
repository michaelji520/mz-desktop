import style from './mz-window.style';
import {IWindowProps} from './types';

const ACTION_ICONS = {
  MAX: require('./assets/maximize.png').default,
  MIN: require('./assets/minimize.png').default,
  CLOSE: require('./assets/close.png').default,
}

class MZWindow extends HTMLElement {

  /** app html container */
  container: HTMLElement = null;

  constructor(props: IWindowProps) {
    super();

    const {icon = '', name = '', container = null} = props;
    this.container = container || this;

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
    <style>${style}</style>
    <div class="header">
      <div class="title">
        <img class="icon" src="${icon}" alt="">
        <span class="name">${name}<span>
      </div>
      <div class="actions">
        <i class="minimize"><img width="8" height="8" src="${ACTION_ICONS.MIN}"></i>
        <i class="maximize"><img width="8" height="8" src="${ACTION_ICONS.MAX}"></i>
        <i class="close"><img width="8" height="8" src="${ACTION_ICONS.CLOSE}"></i>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    `;
  }

  /**
   * @description 当 custom element首次被插入文档DOM时，被调用。
   */
  connectedCallback() {
    this.shadowRoot.querySelector('.close').addEventListener('click', this.onClickClose);
  }

  // To use this, should write as arrow function 
  onClickClose = (e: Event) => {
    const el = this.container;
    console.log(this.container)
    el && el.parentNode.removeChild(el);
  }

  /**
   * @description 当 custom element从文档DOM中删除时，被调用。
   */
  disconnectedCallback() {
    this.shadowRoot.querySelector('.close').removeEventListener('click', this.onClickClose);
  }

}

window.customElements.define('mz-window', MZWindow);

export default MZWindow;
