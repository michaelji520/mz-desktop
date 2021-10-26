import './common/style/reset.less';
import './common/style/global.less';
import './components/mz-desktop/mz-desktop';
import './components/mz-container/mz-container';
import './components/mz-taskbar/mz-taskbar';
import './components/mz-application/mz-application';
import MZIframe  from './components/mz-iframe/mz-iframe';
import MZWindow from './components/mz-window/mz-window';
import apps from './apps/apps';

const instance = new MZWindow();

const app = document.querySelector('#app');

/** Opened app list */
const activeApps = {};

const icons = apps.map((i) => {
  return `<mz-application icon="${i.icon}" name="${i.name}" title="${i.name}"></mz-application>`;
});

window.addEventListener('dblclick', (e) => {
  const el = e.target as HTMLElement;
  console.log(el);
  if (el.tagName.toLowerCase() === 'mz-application') {
    console.log('open app');
    const workspace = document.querySelector('.workspace');
    // workspace.appendChild(new MZIframe({
    //   ...apps[2]
    // }));
    workspace.appendChild(instance);
  }
});

app.innerHTML = `
  <style>
  mz-desktop {
    height: calc(100% - 40px);
    overflow: hidden;
  }
  mz-application {
    margin: 4px;
  }
  .shortcuts {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  </style>
  <mz-container>
    <mz-desktop>
      <div class="shortcuts">
        ${icons.join('')}
      </div>
    </mz-desktop>
    <div class="workspace">
    </div>
    <mz-taskbar></mz-taskbar>
  </mz-container>
`;
