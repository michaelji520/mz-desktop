import './common/style/reset.less';
import './common/style/global.less';
import './components/mz-desktop/mz-desktop';
import './components/mz-container/mz-container';
import './components/mz-taskbar/mz-taskbar';
import './components/mz-application/mz-application';

const app = document.querySelector('#app');

app.innerHTML = `
  <mz-container>
    <mz-desktop>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
      <mz-application></mz-application>
    </mz-desktop>
    <mz-taskbar></mz-taskbar>
  </mz-container>
`;