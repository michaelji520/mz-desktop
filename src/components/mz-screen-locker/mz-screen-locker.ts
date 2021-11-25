import style from './mz-screen-locker.style';
import LOCKER_IMAGE from './assets/tomb-raider.jpg';
import AVATAR from './assets/avatar.jpg';

class MZScreenLocker extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <style>
      ${style}
      .container, .container::before {
        background-image: url(${LOCKER_IMAGE});
      }
    </style>
    <div class="container">
      <div class="login-panel">
        <img class="avatar" src="${AVATAR}">
        <div class="username">Johnny Blaze</div>
        <div class="login-btn">登录</div>
      </div>
    </div>
    `;
  }

  connectedCallback() {
    const loginButton = this.shadowRoot.querySelector('.login-btn');
    loginButton.addEventListener('click', this.handleLoginButtonClick);
    this.addEventListener('click', (e) => {
      this.shadowRoot.querySelector('.container').classList.add('active');
    })
  }

  handleLoginButtonClick = (e) => {
    console.log(e.target)
    this.shadowRoot.host.classList.add('logined');
  }

}

window.customElements.define('mz-screen-locker', MZScreenLocker);

export default MZScreenLocker;