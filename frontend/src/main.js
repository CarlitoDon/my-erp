import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Pastikan ini mengarah ke file router.js

Vue.config.productionTip = false;

new Vue({
  router, // Pastikan router di sini
  render: h => h(App),
}).$mount('#app');
