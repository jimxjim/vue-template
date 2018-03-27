import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/containers/HelloWorld';
import VuexPage from '@/containers/HelloWorld/vuex';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: VuexPage,
    },
  ],
});
