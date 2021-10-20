
class MZIframe extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

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
      background-color: #e7eaec;
      overflow: hidden;
      box-shadow: 0 0 6px rgb(0 0 0 / 25%);
    }
    .header {
      display: flex;
      align-items: center;
      background: #f0f0f0;
      height: 26px;
    }
    .icon {
      margin: 0 10px 0 6px;
      width: 14px;
      height: 14px;
    }
    .name {
      font-size: .64em;
    }
    .content {
      flex-grow: 1;
      margin: 0;
      padding: 0;
    }
    iframe {
      border: 0;
      width: 100%;
      height: 100%;
    }
    </style>
    <div class="header">
      <div class="title">
        <img class="icon" src="" alt="">
        <span class="name"><span>
      </div>
      <div class="actions">
        <i class="close-btn">x</i>
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
    const icon = this.getAttribute('icon');
    const name = this.getAttribute('name');
    const link = this.getAttribute('link');
    this.shadowRoot.querySelector('img').src = icon;
    this.shadowRoot.querySelector('span').textContent= name;
    this.shadowRoot.querySelector('iframe').src = link;
  }
}

window.customElements.define('mz-iframe', MZIframe);