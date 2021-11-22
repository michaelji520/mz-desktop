import style from './mz-screen-locker.style';
import LOCKER_IMAGE from './assets/tomb-raider.jpg';

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
      <div class="login">
        <img src="">
      </div>
    </div>
    `;
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      console.log(this.shadowRoot.querySelector('.overlay'));
      this.shadowRoot.querySelector('.container').classList.add('blur');

      console.log(this);
    })
  }

}

window.customElements.define('mz-screen-locker', MZScreenLocker);

export default MZScreenLocker;