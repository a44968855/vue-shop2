// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import VeeValidate from 'vee-validate';
import zhTWVeeValidate from 'vee-validate/dist/locale/zh_TW';
import currency from './filters/currency';
import timedate from './filters/timedate';
import store from './store';
import router from './router';

import App from './App.vue';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency', currency);
Vue.filter('timedate', timedate);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWVeeValidate);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
