import './404';
import initHome from './home';
import initAdmin from './admin';
import initExample from './example'; // need remove;

export default () => {
  console.log('init pages');
  initHome();
  initAdmin();
  initExample();
};
