// @ts-ignore
import DEFAULT_BACKGROUND from './assets/default-background.jfif';

class MZContainer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'closed'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background-image: url(${DEFAULT_BACKGROUND});
      background-size: cover;
      background-position: center;
    }
    </style>
    <slot></slot>
    `;
    this.oncontextmenu = () => false;
  }

}

window.customElements.define('mz-container', MZContainer);