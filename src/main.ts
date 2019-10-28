import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

// 引入我们封装的axios 请求；
import axios from './utils/http'
// 挂载到Vue 原型对象；
Vue.prototype.$axios=axios;

Vue.config.productionTip = true;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
