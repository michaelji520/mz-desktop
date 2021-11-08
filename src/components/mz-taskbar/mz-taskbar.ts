import style from './mz-taskbar.style';

class MZTaskbar extends HTMLElement {
  runningApps = null;

  constructor(params) {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
    <style>${style}</style>
    `;
  }
}

window.customElements.define('mz-taskbar', MZTaskbar);