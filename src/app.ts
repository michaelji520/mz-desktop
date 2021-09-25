import './common/style/reset.less';
import './common/style/global.less';
import './components/mz-desktop/mz-desktop';

const app = document.querySelector('#app');

app.innerHTML = `
  <mz-desktop></mz-desktop>
`;