// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import Vuex from 'vuex'
import Vuelive2d from 'vue-live2d-model'
import "ant-design-vue/dist/antd.css"
import $ from 'jquery';
import "./assets/style/animate.css"
import store from './store/store.js'
window.jQuery = $;
window.$ = $;
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Vuelive2d)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
