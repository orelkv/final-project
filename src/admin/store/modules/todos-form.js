const todos = {
  state: {
    tasks: [],
  },
  mutations: {
    newItemCreated(state, todo) {
      state.tasks.push(todo)
    },
    deleteTech(state, todo) {
      state.tasks = state.tasks.filter((task) => {
        if (task.id !== todo.id) {
          return true
        }
        return false
      })
    },
    changeTech(state, todo) {
      todo.is_changed = true;
      todo.is_complete = false;
    },
    removeTech(state, todo) {
      todo.is_changed = false;
      todo.is_complete = false;
    },

    completeTech(state, todo) {
      todo.is_changed = false;
      todo.is_complete = true;
    },
  },
  actions: {},
  getters: {},
}
  


export default todos