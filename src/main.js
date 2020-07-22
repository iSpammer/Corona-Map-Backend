import Vue from 'vue';
import App from './App.vue';
import x5GMaps from 'x5-gmaps';

Vue.use(x5GMaps, { key: "AIzaSyD_0EHemLnw3KulL4CcKwxosM_fMrOrOPg", libraries: ['visualization'] });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
