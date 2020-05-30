import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import todos from './modules/todos-form';
import categories from './modules/categories';
import skills from './modules/skills';
import user from './modules/user';

export const store = new Vuex.Store({

  modules: {
    todos,
    categories,
    skills,
    user
  },
})
