<template lang='pug'>
  .skill
    form.skill__form(
      action=''
      method=''
      @submit.prevent = 'formTitle'
      )
      .skill__row.skill__row_title
        input(          
          v-show = 'formName.is_changed === true'
          type='text'
          name='skillTitle'
          placeholder='Название новой группы'
          required
          v-model='formsTitle'
          ).skill__input
        span.skill__title(
          v-show = 'formName.is_changed === false'
          ) {{formsTitle}}
        .skill__btn
          button(type='button'
          v-show = 'formName.is_changed === true'
          @click = 'completeTech(formName)'

          ).skill__link_yes.skill__link
          button(type='button'
          v-show = 'formName.is_changed === true'
          ).skill__link_no.skill__link
          button(
            type='button'
            @click = 'changeTech(formName)'
            v-show = 'formName.is_changed === false'
            ).skill__link_add.skill__link
      .skill__tech
        toDoList(
          :todos='todos'
          )
        toDoForm
        
</template>


<script>
import toDoList from './todo-list';
import toDoForm from './todo-form';
import {mapState} from 'vuex';

export default {
  name: 'new-skill',
  components: {
    toDoList,
    toDoForm,
  },
    data() {
    return {
      formsTitle: '',
      formName: {
      is_completed: false,
      is_changed: false,
      },
    }
  },

  methods: {
    formTitle() {
    if(!this.formsTitle) {
        return
      };
      const newFormTitle = {
        id: Date.now(),
        formsTitle: this.formsTitle,
        is_completed: false,
        is_changed: false,
      };
      this.formName = newFormTitle;
      this.formsTitle = '';
    },
  },
    computed: {
    ...mapState({
      todos: state => state.todos.tasks
    })
  }

}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.skill {
  height: 100%;
  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__row {
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 14px;


    &_title {
      border-bottom: 1px solid rgba(31, 35, 45, 0.15);
      position: relative;
    }
  }
  &__title {
    display: block;
    @include opensans();
    font-size: 18px;
    font-weight: 600;
    color: #414c63;
    margin-bottom: 10px;
  }

  &__input {
    position: relative;
    @include opensans();
    border: none;
    outline: none;
    max-width: 275px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #414c63;
    opacity: 0.51;
    flex: 1;  
    border-bottom: 1px solid transparent;


    &:focus {
      opacity: 1;
      border-bottom: 1px solid #000000;
    }

    &_percent {
      padding-left: 10px;
    }
  }

  &__btn {
    margin-top: 5px;
  }

  &__link {
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-left: 22px;
    &:before {
      content: "";
      display: block;
      width: 15px;
      height: 12px;
    }

    &_yes {
      &:before {
        background: svg-load("tick.svg", fill= "#00d70a") center center /
          contain no-repeat;
      }
    }

    &_no {
      &:before {
        background: svg-load("cross.svg", fill= "#bf2929") center center /
          contain no-repeat;
      }
    }

    &_add {
      &:before {
        opacity: 0.5;
        background: svg-load("pencil.svg", fill= "#414c63") center center /
          contain no-repeat;
      }
    }

    &_del {
      &:before {
        opacity: 0.5;
        background: svg-load("trash.svg", fill= "#414c63") center center /
          contain no-repeat;
      }
    }
    &:hover:before {
      opacity: 1;
    }
  }

  &__tech {
    height: 100%;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>