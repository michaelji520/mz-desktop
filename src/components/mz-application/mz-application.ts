class MZApplication extends HTMLElement {
  shadow: HTMLElement = null;
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'closed'});

    shadow.innerHTML = `
    <style>
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px 10px 0 10px;
      transition: all .2s ease-in-out;
    }
    :host(:hover) {
      background-color: hsla(0,0%,100%,.25)
    }
    img {
      width: 36px;
      height: 36px;
    }
    span {
      height: 34px;
      line-height: 17px;
      max-width: 56px;
      font-size: .8em;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      color: #fafafa;
      margin: 4px 0;
      cursor: default;
      text-shadow: 0 0 4px rgb(0 0 0 / 60%);
    }
    </style>
    <img src="" />
    <span></span>
    `;

  }

  /**
   * @description 当 custom element首次被插入文档DOM时，被调用。
   */
  connectedCallback() {
    const icon = this.getAttribute('icon');
    const name = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = icon;
    this.shadowRoot.querySelector('span').textContent= name;
  }

  /**
   * @description 当 custom element从文档DOM中删除时，被调用。
   */
  disconnectedCallback() {
    
  }

  /**
   * @description 当 custom element被移动到新的文档时，被调用。
   */
  adoptedCallback() {

  }

  /**
   * @description 当 custom element增加、删除、修改自身属性时，被调用。
   */
  attributeChangedCallback() {

  }
}

window.customElements.define('mz-application', MZApplication);
