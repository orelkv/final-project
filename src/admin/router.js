import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import login from './components/main/authorize.vue'
import about from './components/main/about.vue'
import works from './components/main/works.vue'
import comments from './components/main/comments.vue'

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/admin',
    component: about
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/comments',
    component: comments
  }
];

export default new VueRouter({ routes, mode: 'history' });