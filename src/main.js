// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../my-theme/index.less';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(ElementUI);

import http from './service/http.js'
import ports from './service/ports_api.js'
Vue.prototype.http = http
Vue.prototype.ports = ports

/* eslint-disable no-new */
new Vue({
  el: '#views',
  router,
  store,  //将store暴露出来
  components: { App },
  template: '<App/>'
})
