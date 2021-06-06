import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/index/Home.vue";
import Nft from "./../views/index/Nft.vue";
import Swap from "./../views/index/Swap.vue";
import Donate from "./../views/index/Donate.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Home",
    component: Home,
  },
  {
    path: "/nft",
    name: "Nft",
    component: Nft,
  },
  {
    path: "/swap",
    name: "Swap",
    component: Swap,
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
  },
];

const router = new VueRouter({
  mode: "hash",
  /*将默认的history模式更改为hash模式*/
  base: process.env.BASE_URL,
  routes,
});

export default router;
