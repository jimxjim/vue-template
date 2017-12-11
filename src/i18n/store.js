import { createTypes } from 'reduxsauce';
import Vue from 'vue';
import i18n from './';

export const types = createTypes(`
  CHANGE_LANGUAGE
`);

const state = {
  lang: 'zh-CN',
};

const getters = {
  lang: rootState => rootState.lang,
};

const actions = {
  changeLang({ commit }, lang) {
    commit(types.CHANGE_LANGUAGE, lang);
  },
};

const mutations = {
  [types.CHANGE_LANGUAGE](rootState, setlang) {
    Vue.set(rootState, 'lang', setlang);
    i18n.locale = setlang;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
