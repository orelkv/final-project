import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import {store} from './store/index';
import SimpleVueValidation from 'simple-vue-validator';
import router from './routes/index';
import $axios from './requests';

Vue.use(SimpleVueValidation);
Vue.use(Vuex);

store.$axios = $axios;

new Vue({
  el: "#app-root",
  store,
  router,
  render: h => h(App),
})

