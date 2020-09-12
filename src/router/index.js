import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Womens from '../views/Womens.vue';
import Mens from '../views/Mens.vue';
import Apps from '../views/Apps.vue';
import Children from '../views/Children.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/mens',
    name: 'mens',
    component: Mens
  },
  {
    path: './apps',
    name: 'apps',
    component: Apps
  },
  {
    path: '/womens',
    name: 'womens',
    component: Womens
  },
  {
    path: '/children',
    name: 'children',
    component: Children
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
