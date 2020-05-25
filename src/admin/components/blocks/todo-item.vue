<template lang="pug">
  li.todo-item(
    :class='{changed : todo.is_changed,  completed : todo.is_completed}'
    )
    form(name='skillForm').todo-item__form
      .todo-item__wrap
        input(
          type='text' 
          name='skill'
          required
          :value='todo.title'
          ).todo-item__input
        .todo-item__input-wrap
        
          input(
            type='text'
            name='skillPercent'
            required
            :value='todo.percent'

            ).todo-item__input.todo-item__input_percent
          span.todo-item__percent {{todo.percent}}

        .todo-item__btn-wrap
          todoBtnChanged(
            :removeTech='someRemove'
            :completeTech='someComplete'
          )
          todoBtnCompleted(
            :deleteTech='someDelete'
            :changeTech='someChange'
          )
        span.todo-item__tech {{todo.title}}
</template>



<script>
import todoBtnCompleted from './todo-btnCompleted';
import todoBtnChanged from './todo-btnChanged';
import { mapMutations } from 'vuex';

// import {mapState} from 'vuex'
export default {
  name: 'todo-item',
  props: ['todo'],  
  components: {
    todoBtnChanged,
    todoBtnCompleted,
  },
  methods: {
    ...mapMutations(['deleteTech', 'changeTech', 'completeTech', 'removeTech']),

    someChange() {
      this.changeTech(this.todo);
    },

    someRemove() {
      this.removeTech(this.todo)
    },

    someComplete() {
      this.completeTech(this.todo)
    },
    
    someDelete() {
      this.deleteTech(this.todo)
    },
  },
  //   computed: {
  //   ...mapState({
  //     todos: state => state.todos.tasks
  //   })
  // }
}
</script>


<style lang='pcss' scoped>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.todo-item {  
  width: 100%;  

  .todo-btnCompleted {
    display: block;
  }

  .todo-btnChanged {
    display: none;
  }

  &__wrap {
    display: flex;
    position: relative;
    padding: 0 10px;
  }

  &__tech {
    position: absolute;
    display: block;
    @include opensans();    
    font-size: 16px;
    font-weight: normal;
    color: #414c63;
    top: 0;
    left: 10px;
  }

  &__input-wrap {
    position: relative;

    &:before {
      @include opensans();
      content: "%";
      position: absolute;
      display: block;
      right: 10px;
      top: 0;
      font-size: 16px;
      font-weight: normal;
      color: rgb(65, 76, 99);
    }
  }

  &__percent {
    position: absolute;
    display: block;
    top: 0;
    left: 10px;
    @include opensans();    
    font-size: 16px;
    font-weight: normal;
    color: #414c63;

  }

  &__input {
    max-width: 273px;
    @include opensans();
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 14px;
    margin-right: 20px;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: normal;
    color: #414c63;
    background-color: transparent;
    border-bottom: 1px solid transparent;



    &_percent {
      padding-left: 10px;
      padding-right: 25px;
      width: 75px;
      margin-right: 0;
    }
  }

    &__btn-wrap {
    margin-left: auto;
  }

  &.changed {
    
    .todo-item__percent {
      display: none;
    }

    .todo-item__tech {
      display: none;
    }

    .todo-item__input {
      border-bottom: 1px solid #000000;
    }

    .todo-btnCompleted {
      display: none;
    }

    .todo-btnChanged {
      display: block;
    }
  }

  &.completed {
    
    .todo-item__percent {
      display: block;
    }

    .todo-item__tech {
      display: block;
    }

    .todo-item__input {
      border-bottom: none;
    }

    .todo-btnCompleted {
      display: block;
    }

    .todo-btnChanged {
      display: none;
    }
  }
}

</style>