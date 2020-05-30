<template lang="pug">
  ul.todo-list
    todoItem(
      v-for = 'skill in skills'
      :key='skill.id'
      :skill='skill'
    )

</template>




<script>
import todoItem from './todo-item';

export default {
  name: 'todo-list',
  data() {
    return {
      skill: {
        title: '',
        percent: 0,        
      }
    }
  },  components: {
    todoItem,
  },
}
</script>

<style lang="postcss" scoped>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.todo-list {
  display: flex;
  flex-direction: column;
}
</style>
