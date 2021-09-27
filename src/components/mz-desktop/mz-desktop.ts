
class MZDesktop extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      width: 100%;
      height: 100%;
    }
    </style>
    <slot></slot>
    `;
    
  }
}

window.customElements.define('mz-desktop', MZDesktop);