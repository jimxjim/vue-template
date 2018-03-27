import Vue from 'vue';
import i18n from './i18n';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* 偵測使用者瀏覽器語系，非中文設定為英文 */

// const userLang = navigator.language || navigator.userLanguage;
// localStorage.setItem('userLang', userLang);
// const defaultLang = !(userLang === 'zh-CN' || userLang === 'zh-TW') ? 'en-US' : userLang;
// const lang = localStorage.getItem('lang');
// if (!lang) {
//   store.dispatch('changeLang', defaultLang);
//   localStorage.setItem('lang', defaultLang);
// } else {
//   store.dispatch('changeLang', lang);
// }
// i18n.locale = lang ? store.state.i18n.lang : defaultLang;

/* end */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
});
