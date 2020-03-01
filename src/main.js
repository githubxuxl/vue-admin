import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入ElementUI 样式文件需要单独引用
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Vue2OrgTree from "vue2-org-tree";

Vue.use(ElementUI);
Vue.use(Vue2OrgTree);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
