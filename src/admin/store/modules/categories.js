
export default {
  namespaced: true,
  state: {
    categories: [],
    is_changed: false,
    add_category: false,
  },
  mutations: {
    openNewCategory(state) {
      state.add_category = true;
    },
    changeNameCategory(state) {
      state.is_changed = true;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, newCategory) {
      state.categories.push(newCategory)
    }
  },
  actions: {
    async addCategory({commit}, title) {
      try {
        const {data} = await this.$axios.post('/categories', { title });
        commit('ADD_CATEGORY', data);
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }      
    },

    async fetchCategories({commit}) {
      try {
        const {data} = await this.$axios.get('/categories/332');

        commit('SET_CATEGORIES', data);
        
      } catch (error) {
        console.log(error);
      }
    }
  }
}