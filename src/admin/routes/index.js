import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";
import store from '../store';
import axios from 'axios';

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: 'https://webdev-api.loftschool.com',
});

const router = new VueRouter({ routes });
  
// router.beforeEach(async (to, from, next) => {
//   const isPublicRoute = to.matched.some(router => router.meta.public);
//   // const isUserLoggedIn = store.getters['../store/modules//user/userIsLogged'];

//   if(!isPublicRoute && !isUserLoggedIn) {
//     const token = localStorage.getItem('token');

//     guard.defaults.headers['Authorization'] = `Bearer ${token}`;

//     try {
//       const {data} = guard.get('user');
//       store.commit('user/SET_USER', data.user);
//       next()
//     } catch (error) {
//       router.replace('/login');
//       localStorage.clear();
//     }
//   } else {
//     next()
//   }
// });


export default router;