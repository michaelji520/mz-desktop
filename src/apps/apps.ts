import { APP_TYPE } from "../common/enum";

const appList: Array<IAppConfig> = [
  {
    appid: 1,
    name: 'Michael',
    icon: require('./assets/computer.png').default,
    type: ''
  },
  {
    appid: 2,
    name: 'Recycle Bin',
    icon: require('./assets/recycle.png').default,
    type: '',
  },
  {
    appid: 3,
    name: 'Transmission',
    icon: require('./assets/transmission.png').default,
    link: 'https://sakura.zhangji.xyz/transmission',
    type: APP_TYPE.WEBSITE
  },
  {
    appid: 4,
    name: 'VS Code',
    icon: require('./assets/vscode.png').default,
    link: 'https://vscode.dev/',
    type: APP_TYPE.WEBSITE
  },
  {
    appid: 5,
    name: 'Photopea',
    icon: require('./assets/photopea.png').default,
    link: 'https://www.photopea.com/',
    type: APP_TYPE.WEBSITE
  },
  {
    appid: 6,
    name: 'Aria2',
    icon: require('./assets/aria2.png').default,
    link: 'https://sakura.zhangji.xyz/aria2',
    type: APP_TYPE.WEBSITE
  },
  {
    appid: 7,
    name: 'Github',
    icon: require('./assets/github.png').default,
    link: 'https://github.com/michaelji520/mz-desktop',
    type: APP_TYPE.NEW_PAGE,
  },
];

export default appList;

/** App config*/
export interface IAppConfig {
  /** global unique app id */
  appid: number;
  /** app name */
  name: string;
  /** app logo, use image link */
  icon: string;
  /** app type */
  type: string;
  /** necessary if web app */
  link?: string;
}

export interface IRunningApp extends IAppConfig {
  /** app instance id */
  id: string;
  /** app root element */
  container: HTMLElement;
  /** window display status */
  windowDisplayStatus: string;
}
