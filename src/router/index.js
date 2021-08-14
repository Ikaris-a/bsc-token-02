import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/index/Home.vue";
// import Nft from "./../views/index/Nft.vue";
import whitepaper from "./../views/index/whitepaper.vue";
// import Donate from "./../views/index/Donate.vue";
// import Dividends from "./../views/index/Dividends.vue";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Index",
  //   redirect: "/index",
  // },
  {
    path: "/index",
    name: "Home",
    component: Home,
  },
  {
    path: "/whitepaper",
    name: "whitepaper",
    component: whitepaper,
  },
  // {
  //   path: "/swap",
  //   name: "Swap",
  //   component: Swap,
  // },
  // {
  //   path: "/donate",
  //   name: "Donate",
  //   component: Donate,
  // },
  // {
  //   path: "/dividends",
  //   name: "Dividends",
  //   component: Dividends,
  // },
];

const router = new VueRouter({
  mode: "hash",
  /*将默认的history模式更改为hash模式*/
  base: process.env.BASE_URL,
  routes,
});

export default router;
