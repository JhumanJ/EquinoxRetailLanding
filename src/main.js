import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueScrollTo from 'vue-scrollto';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/main.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueScrollTo);

Vue.prototype.$scrollToTop = () => window.scrollTo(0,0);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
