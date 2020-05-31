
import works from '../components/main/works.vue';


export default [
  {
    path: '/',
    component: () => import('../components/main/about.vue'),
    meta: {
      title: 'Обо мне'
    }
  },
  {
    path: '/works',
    component: works,
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
