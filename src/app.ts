import './common/style/reset.less';
import './common/style/global.less';
import './components/mz-desktop/mz-desktop';
import './components/mz-container/mz-container';
import './components/mz-taskbar/mz-taskbar';

const app = document.querySelector('#app');

app.innerHTML = `
  <mz-container>
    <mz-desktop></mz-desktop>
    <mz-taskbar></mz-taskbar>
  </mz-container>
`;