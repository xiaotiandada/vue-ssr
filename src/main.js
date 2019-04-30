import Vue from 'vue'
import App from './App.vue'
import VueHead from 'vue-head'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueHead)
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
