<template lang="pug">
  .todo-btnChanged
      button(type='button' @click.prevent='completeTech').todo-btn__link_yes.todo-btn__link
      button(type='button' @click.prevent='removeTech').todo-btn__link_no.todo-btn__link
</template>



<script>
export default {
  name: 'todo-btnChanged',
  props: ['completeTech', 'removeTech'],  
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
  }
}



</style>