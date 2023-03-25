import Vue from 'vue'
import App from './App.vue'
import home from "./home.vue"
import ortaKisim from "./orta-kisim.vue"

Vue.component("orta-kisim",ortaKisim);
Vue.component("home",home);

new Vue({
  el: '#app',
  render: h => h(App)
})
