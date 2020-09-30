import Vue from "vue";
// 导入vue
import "./plugins/axios";
// 使用插件

import router from "./router/index";
// 引入路由实例

import store from "./store/index";
// 引入store

import VueCookies from 'vue-cookies'
// 引入 vue-cookies

import App from "./App.vue";
// 引入app组件

Vue.use(VueCookies)
// 使用 vue-cookies

Vue.config.productionTip = false;
// 阻止启动生产消息，常用作指令。

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//导入bootstrap

import 'font-awesome/css/font-awesome.min.css'
//导入font-awesome图标库

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
// vue实例 挂载