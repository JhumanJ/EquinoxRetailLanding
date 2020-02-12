import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueScrollTo from 'vue-scrollto';
import { BootstrapVue } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';

import './styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VueScrollTo);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
