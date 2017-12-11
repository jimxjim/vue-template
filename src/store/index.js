import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import monitorState from '../plugins/monitorState';
import i18n from '../i18n/store';

Vue.use(Vuex);

const modules = {
  i18n,
};

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ?
    [createLogger(), monitorState()] :
    [],
});
