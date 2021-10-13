class MZApplication extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      padding: 16px;
      width: 56px;
      height: 66px;
      background: #FFF;
    }
    </style>
    <slot></slot>
    `;
    

  }
}

window.customElements.define('mz-application', MZApplication);