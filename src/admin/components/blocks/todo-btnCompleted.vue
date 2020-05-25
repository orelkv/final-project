<template lang="pug">
  .todo-btnCompleted
      button(type='button' @click.prevent='changeTech').todo-btn__link_add.todo-btn__link
      button(type='button' @click.prevent='deleteTech').todo-btn__link_del.todo-btn__link
</template>



<script>
export default {
  name: 'todo-btnCompleted',
  props: ['deleteTech', 'changeTech'],  
}
</script>


<style lang='pcss' scoped>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.todo-btn {  
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
}



</style>