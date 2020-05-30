<template lang="pug">
  form(@submit.prevent='addNewSkill').todo-form
    .todo-form__wrap
      input(
        type='text' name='newSkill'
        placeholder='Новый навык'
        required
        v-model='skill.title'
        ).todo-form__input
      .todo-form__input-wrap
        input(
          type='text'
          name='newSkillPercent'
          placeholder='100'
          required
          v-model='skill.percent'
          ).todo-form__input.todo-form__input_percent
      button(type='submit').todo-form__add-tech

</template>

<script>
import {mapMutations, mapActions} from 'vuex';
export default {
  name: 'todo-form',
  props: ['cat'],

  data() {
    return {
      skill: {
        title: '',
        percent: 0,        
      }
    }
  },

  methods: {
    ...mapMutations(['newItemCreated']),
    ...mapActions('skills', ['addSkill']),

    async addNewSkill() {
      const skillData = {
        ...this.skill,
        category: this.cat.id
      }
      try {
        await this.addSkill(skillData);
      } catch (error) {
        console.log(error)
      }
    },
    submitForm() {
      if(!this.title) {
        return
      };
      const newTodoItem = {
        id: Date.now(),
        title: this.title,
        percent: this.percent,
        is_completed: false,
        is_changed: false,
      };
      this.newItemCreated({...newTodoItem})
      this.title = '';
      this.percent = '';
    }

  },
}
</script>


<style lang="postcss">
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.todo-form {  
    margin-top: 80px;

  width: 100%;
  &__wrap {
    display: flex;
    justify-content: center;
    position: relative;
  }

  &__input-wrap {
    position: relative;

    &:before {
      @include opensans();
      content: "%";
      position: absolute;
      display: block;
      right: 20px;
      top: 0;
      opacity: 0.7;
      font-size: 16px;
      font-weight: normal;
      color: rgb(65, 76, 99);
    }
  }

  &__input {
    max-width: 220px;
    @include opensans();
    border: none;
    outline: none;
    width: 100%;
    margin-right: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: normal;
    color: #414c63;
    opacity: 0.51;
    border-bottom: 1px solid #000000;

    &:focus {
      opacity: 1;
    }

    &_percent {
      padding-left: 10px;
      padding-right: 25px;
      width: 75px;
    }
  }

  &__add-tech {
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #006aed, #3f35cb);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-image: linear-gradient(to top, #3f35cb, #006aed);
    }

    &:before {
      content: "+";
      display: block;
      font-family: OpenSans;
      font-size: 30px;
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>