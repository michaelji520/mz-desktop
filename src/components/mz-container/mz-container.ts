// import DEFAULT_BACKGROUND from './assets/default-background.jfif';
import style from './mz-container.style';

class MZContainer extends HTMLElement {
  constructor(params) {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <style>${style}</style>
    <slot></slot>
    `;
    this.oncontextmenu = () => false;
  }

  connectedCallback() {
  }

}

window.customElements.define('mz-container', MZContainer);

export default MZContainer;