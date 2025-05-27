import './common/style/reset.less';
import './common/style/global.less';
import './app.less';
import './components/mz-desktop/mz-desktop';
import MZContainer from './components/mz-container/mz-container';
import MZScreenLocker from './components/mz-screen-locker/mz-screen-locker';
import './components/mz-taskbar/mz-taskbar';
import './components/mz-application/mz-application';
import MZWebsite from './components/mz-website/mz-website';
import apps, { IRunningApp, IAppConfig } from './apps/apps';
import { uuidv4 } from './common/util';
import { APP_TYPE, WINDOW_DISPLAY_STATUS } from './common/enum';

const app = document.querySelector('#app');

/** Opened app list */
const runningAppList = {};

function createAppInstance(app: IAppConfig) {
  const instance: IRunningApp = {
    ...app,
    id: uuidv4(),
    container: createAppContainer(app),
    windowDisplayStatus: WINDOW_DISPLAY_STATUS.MAXIMIZE
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
    if (app.type === APP_TYPE.NEW_PAGE) return window.open(app.link, '_blank');
    const instance = createAppInstance(app);
    addRunningApp(instance);
    workspace.appendChild(instance.container);
  }
});

new MZContainer({});
new MZScreenLocker();

app.innerHTML = `
  <mz-container>
    <mz-desktop>
      <div class="shortcuts">
        ${icons.join('')}
      </div>
      <div class="workspace">
      </div>
    </mz-desktop>
    <mz-taskbar></mz-taskbar>
    <mz-screen-locker></mz-screen-locker>
  </mz-container>
`;
