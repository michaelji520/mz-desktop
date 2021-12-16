import style from './mz-screen-locker.style';
import LOCKER_IMAGE from './assets/tomb-raider.jpg';
import AVATAR from './assets/guest.jpeg';

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
        <img class="avatar" src="${AVATAR}" alt="user-avatar">
        <div class="username">Guest</div>
        <div class="login-btn">登录</div>
      </div>
    </div>
    `;
  }

  connectedCallback() {
    const loginButton = this.shadowRoot.querySelector('.login-btn');
    loginButton.addEventListener('click', this.handleLoginButtonClick);
  }

  handleLoginButtonClick = (e) => {
    console.log(e.target)
    fetch('/api/hello')
      .then(response => console.log(response));
    const container = this.shadowRoot.querySelector('.container');
    container.classList.add('logined');
    setTimeout(() => container.classList.add('hide'), 500);
  }

}

window.customElements.define('mz-screen-locker', MZScreenLocker);

export default MZScreenLocker;