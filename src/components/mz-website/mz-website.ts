import { IAppConfig } from "../../apps/apps";
import MZWindow from "../mz-window/mz-window";

class MZWebsite extends HTMLElement {
  constructor(app: IAppConfig) {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    const style = document.createElement('style');
    style.innerHTML = `
      iframe {
        border: 0;
        width: 100%;
        height: 100%;
      }
    `;
    
    const wrapper = new MZWindow({...app, container: this});

    const content = document.createElement('iframe');
    content.src = app.link;

    wrapper.append(content);

    shadowRoot.append(style, wrapper)
  }

  /**
   * @description 当 custom element首次被插入文档DOM时，被调用。
   */
  connectedCallback() {
  }

  onClickClose(e: Event) {
  }

  /**
   * @description 当 custom element从文档DOM中删除时，被调用。
   */
  disconnectedCallback() {
  }

}

window.customElements.define('mz-website', MZWebsite);

export default MZWebsite;
