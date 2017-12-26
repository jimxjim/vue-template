import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/less/font-awesome.less';
import Vue from 'vue';
import i18n from './i18n';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
});
