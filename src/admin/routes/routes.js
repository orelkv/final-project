import Vue from 'vue'
export default [
  {
    path: '/admin',
    component: () => import('../components/main/about.vue'),
    meta: {
      title: 'Обо мне'
    }
  },
  {
    path: '/works',
    component: () => import('../components/main/works.vue'),
    meta: {
      title: 'Работы'
    }

  },
  {
    path: '/comments',
    component: () => import('../components/main/comments.vue'),
    meta: {
      title: 'Отзывы'
    }

  },
  {
    path: '/login',
    component: () => import('../components/main/authorize.vue'),
    meta: {
      public: true,
    }
  },
];
