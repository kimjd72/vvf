import Vue from 'vue'
import './plugins'
import './errorHandler'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let global = 'abc'
Vue.prototype.$global = global

new Vue({
  router,
  store,
  render: h => h(App)

}).$mount('#app')
