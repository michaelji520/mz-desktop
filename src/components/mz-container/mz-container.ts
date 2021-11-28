import DEFAULT_BACKGROUND from './assets/default-background.jfif';
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
    // @ts-ignore
    this.shadowRoot.host.style.cssText = `background: url(${DEFAULT_BACKGROUND})`;
    console.log(this.shadowRoot.host)
  }

}

window.customElements.define('mz-container', MZContainer);

export default MZContainer;