import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip=false;
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  router,
  store,
  //安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
},).$mount('#app')

