import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import {store} from './store/index';
import SimpleVueValidation from 'simple-vue-validator';
import router from './router';

Vue.use(SimpleVueValidation);
Vue.use(Vuex);

new Vue({
  el: "#app-root",
  render: h => h(App),
  store,
  router
});


// const store = new Vuex.Store({
//   state: {
//     tasks: []
//   },
//   mutations: {
//     addTodo (state, payload) {
//       console.log(state)
//       console.log(payload)
//       // state.tasks++
//     },

//     removeTodo (state, payload) {
//       console.log(state)
//       console.log(payload)
//       // state.tasks++
//     }
//   }
// })