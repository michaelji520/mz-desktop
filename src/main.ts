import './common/style/reset.less';
import './common/style/global.less';
import './components/mz-desktop/mz-desktop';
import './components/mz-container/mz-container';
import './components/mz-taskbar/mz-taskbar';
import './components/mz-application/mz-application';
import MZWebsite from './components/mz-website/mz-website';
import apps, { IRunningApp, IAppConfig } from './apps/apps';
import { uuidv4 } from './common/util';
import { APP_TYPE } from './common/enum';

const app = document.querySelector('#app');

/** Opened app list */
const runningAppList = {};

function createAppInstance(app: IAppConfig) {
  const instance: IRunningApp = {
    ...app,
    id: uuidv4(),
    container: createAppContainer(app)
  }

  return instance;
}

function addRunningApp(instance: IRunningApp) {
  runningAppList[instance.id] = instance;
}

function createAppContainer(app: IAppConfig) {
  if (app.type === APP_TYPE.WEBSITE) return new MZWebsite(app);
  return null;
}

const icons = apps.map((i) => {
  return `<mz-application icon="${i.icon}" name="${i.name}" title="${i.name}" appid="${i.appid}"></mz-application>`;
});

window.addEventListener('dblclick', (e) => {
  const el = e.target as HTMLElement;
  if (el.tagName.toLowerCase() === 'mz-application') {
    const workspace = document.querySelector('.workspace');
    const appid = Number(el.getAttribute('appid'));
    const app = apps.find((i) => i.appid === appid);
    const instance = createAppInstance(app);
    addRunningApp(instance);
    workspace.appendChild(instance.container);
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
