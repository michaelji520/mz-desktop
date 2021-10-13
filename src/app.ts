import './common/style/reset.less';
import './common/style/global.less';
import './components/mz-desktop/mz-desktop';
import './components/mz-container/mz-container';
import './components/mz-taskbar/mz-taskbar';
import './components/mz-application/mz-application';

const app = document.querySelector('#app');

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
      </div>
    </mz-desktop>
    <mz-taskbar></mz-taskbar>
  </mz-container>
`;