//@ts-ignore
import DEFAULT_BACKGROUND from './assets/desktop.jpeg';


class MZDesktop extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      background-image: url(${DEFAULT_BACKGROUND});

    }
    </style>
    <div class="mz-desktop"></div>
    `;
    

  }
}

window.customElements.define('mz-desktop', MZDesktop);