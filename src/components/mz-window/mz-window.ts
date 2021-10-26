import style from './mz-window.style';

const ACTION_ICONS = {
  MAX: require('./assets/maximize.png').default,
  MIN: require('./assets/minimize.png').default,
  CLOSE: require('./assets/close.png').default,
}

class MZWindow extends HTMLElement {
  /** window icon */
  icon: string = '';
  /** window name */
  name: string = '';

  constructor({}) {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
    <style>${style}</style>
    <div class="header">
      <div class="title">
        <img class="icon" src="" alt="">
        <span class="name"><span>
      </div>
      <div class="actions">
        <i class="minimize"><img width="8" height="8" src="${ACTION_ICONS.MIN}"></i>
        <i class="maximize"><img width="8" height="8" src="${ACTION_ICONS.MAX}"></i>
        <i class="close"><img width="8" height="8" src="${ACTION_ICONS.CLOSE}"></i>
      </div>
    </div>
    <div class="content">
      <iframe></iframe>
    </div>
    `;
  }

  /**
   * @description 当 custom element首次被插入文档DOM时，被调用。
   */
  connectedCallback() {
    const {icon, name, link} = this.props || {
      icon: this.getAttribute('icon'),
      name: this.getAttribute('name'),
    };

    this.shadowRoot.querySelector('img').src = icon;
    this.shadowRoot.querySelector('span').textContent= name;
    this.shadowRoot.querySelector('iframe').src = link;
    this.shadowRoot.querySelector('.close-btn').addEventListener('click', this.onClickClose);
  }

  onClickClose(e: Event) {
    // el.parentNode.removeChild(el);
  }

  /**
   * @description 当 custom element从文档DOM中删除时，被调用。
   */
  disconnectedCallback() {
    this.shadowRoot.querySelector('.close-btn').removeEventListener('click', this.onClickClose);
  }

}

window.customElements.define('mz-window', MZWindow);

export default MZWindow;
