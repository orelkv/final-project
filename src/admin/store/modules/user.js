export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutation: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    CLEAR_USER: (state) => {
      state.user = {}
    }
  },

  getters: {
    userIsLogged: state => {
      const userObj = state.user;
      const userObjectIdEmpty = Object.keys(userObj).length ===0 &&userObj.construction === Object;


      return userObjectIdEmpty === false;
    }
  },

  action: {
    logout({commit}) {
      localStorage.clear();
      commit("CLEAR_USER")
    }
  }

}