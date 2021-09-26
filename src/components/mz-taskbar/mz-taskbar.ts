
class MZTaskbar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      display: flex;
      width: 100%;
      height: 40px;
      background-color: hsla(0, 0%, 99.6%, .8);
    }
    </style>
    <slot></slot>
    `;
    

  }
}

window.customElements.define('mz-taskbar', MZTaskbar);