
class MZIframe extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});

    shadowRoot.innerHTML = `
    <style>
    :host {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 10%;
      left: 20%;
      width: 60%;
      height: 80%;
      border-radius: 6px;
      transition: all .2s ease-in-out;
      background-color: #fefefe;
      overflow: hidden;
    }
    .window-title {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      height: 26px;
    }
    .window-content {
      flex-grow: 1;
    }
    </style>
    <div class="window-title">Transmission</div>
    <div class="window-content"></div>
    `;
    
  }
}

window.customElements.define('mz-iframe', MZIframe);