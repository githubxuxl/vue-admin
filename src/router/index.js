import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "codeCompare"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/codeCompare",
    name: "codeCompare",
    component: () => import("@/views/codeCompare/CodeCompareIndex.vue")
  },
  {
    path: "/orgTree",
    name: "orgTree",
    component: () => import("@/views/orgTree/orgTreeDemo.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
