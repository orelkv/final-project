<template lang='pug'>
  .menu
    ul.menu__list
      li.menu__item(
        v-for='tab in tabs' :key='tab.id'
        :class="{'active' : activeTabId === tab.id}"
        )
        button.menu__link(
          type='button'
          @click='handleChange(tab)'
        ) {{tab.title}}
</template>

<script>

const tabs = [
  {id: 0, title: 'Обо мне', href: '/'},
  {id: 1, title: 'Работы', href: '/works'},
  {id: 2, title: 'Отзывы', href: '/comments'},
]

export default {
  name: 'menu',
  data() {
    return {
      tabs,
      activeTabId: 0,
    }
  },
  methods: {
    handleChange(tab) {
      this.activeTabId = tab.id;
      this.$emit('tabChanged', tab)
    }
  },  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.menu {
  display: flex;
  height: 100%;
  align-items: center;

  &__list {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__item {
    position: relative;
    height: 100%;
    padding: 30px 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      &:before {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        border-bottom: solid 3px #383bcf;
        right: 0;
      }
      .menu__link {
        color: #383bcf;
      }
    }
  }

  &__link {
    @include opensans();
    font-size: 16px;
    font-weight: 600;
    color: #414c63;
    &:hover {
      color: #383bcf;
    }
  }
}

</style>