import Vue from "vue";
import App from "./App.vue";

import { createRouter } from "./router";
import { createStore } from "./store";
import VueMeta from "vue-meta";
Vue.use(VueMeta);

Vue.config.productionTip = false;

Vue.mixin({
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", "log");
    next(vm => {
      const { asyncData } = vm.$options;
      if (asyncData) {
        asyncData(vm.$store, vm.$route)
          .then(next)
          .catch(next);
      } else {
        next();
      }
    });
  }
});

export function createApp() {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
}
