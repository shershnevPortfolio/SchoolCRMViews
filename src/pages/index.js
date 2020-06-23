import './404';
import initHome from './home';
import initAdmin from './admin';
import initChat from './chat';

export default () => {
  console.log('init pages');
  initHome();
  initAdmin();
  initChat();
};
