import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUS from './locales/en-US';
import zhCN from './locales/zh-CN';
import zhTW from './locales/zh-TW';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'zh-CN',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
  },
});

export default i18n;
