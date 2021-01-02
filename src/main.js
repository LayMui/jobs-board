import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import Vuelidate from "vuelidate";


Vue.use(Vuelidate);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
