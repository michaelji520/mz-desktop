class MZApplication extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      width: 40px;
      height: 40px;
      margin: 5px;
      background: #FFF;
    }
    </style>
    <slot></slot>
    `;
    

  }
}

window.customElements.define('mz-application', MZApplication);