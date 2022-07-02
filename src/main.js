import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


Vue.config.productionTip = false

// Import global styling
//import '@/assets/global.css'

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make bootstrap available in the entire project
Vue.use(BootstrapVue)

// We could optionally install BootstrapVue icons plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
