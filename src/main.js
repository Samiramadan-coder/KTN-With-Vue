import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "normalize.css";
import "./filters.js";

import vueSmoothScroll from "vue2-smooth-scroll";

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App), // ES6 Code

  //render:  (h) => h(App),
  //render: (createElement) => createElement('h1','Hello')
}).$mount("#app");

