
class MZIframe extends HTMLElement {
  props: any = null;
  constructor(props?) {
    super();
    this.props = props;
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
      justify-content: space-between;
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
    .actions {
      display: flex;
      align-items: center;
      transition: all 60ms ease-in-out;
      height: 100%
    }
    .close-btn {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 14px;
    }
    .close-btn:hover {
      background: rgba(255,0,0,.8);
    }
    iframe {
      border: 0;
      width: 100%;
      height: 100%;
    }
    </style>
    <div class="header">
      <div class="title">
        <img class="icon" src="}" alt="">
        <span class="name"><span>
      </div>
      <div class="actions">
        <i class="close-btn"><img width="8" height="8" src="${require('../../apps/assets/close.png').default}"></i>
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
    const {icon, name, link} = this.props || {
      icon: this.getAttribute('icon'),
      name: this.getAttribute('name'),
      link: this.getAttribute('link'),
    };

    this.shadowRoot.querySelector('img').src = icon;
    this.shadowRoot.querySelector('span').textContent= name;
    this.shadowRoot.querySelector('iframe').src = link;
    this.shadowRoot.querySelector('.close-btn').addEventListener('click', this.onClickClose);
  }

  onClickClose(e: Event) {
    const el = document.querySelector('mz-iframe');
    el.parentNode.removeChild(el);
  }

  /**
   * @description 当 custom element从文档DOM中删除时，被调用。
   */
  disconnectedCallback() {
    this.shadowRoot.querySelector('.close-btn').removeEventListener('click', this.onClickClose);
  }

}

window.customElements.define('mz-iframe', MZIframe);

export default MZIframe;
