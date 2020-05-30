import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: () => import('./components/main/about.vue'),
    meta: {
      title: 'Обо мне'
    }
  },
  {
    path: '/works',
    component: () => import('./components/main/works.vue'),
    meta: {
      title: 'Работы'
    }

  },
  {
    path: '/comments',
    component: () => import('./components/main/comments.vue'),
    meta: {
      title: 'Отзывы'
    }

  },
  {
    path: '/login',
    component: () => import('./components/main/authorize.vue'),
    meta: {
      public: true,
    }

  },
];

export default new VueRouter({ routes });

// mode: 'history'