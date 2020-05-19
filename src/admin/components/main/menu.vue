<template lang='pug'>
  .menu
    ul.menu__list
      li.menu__item.menu__item_active
        a.menu__link(href="#") Обо мне
      li.menu__item
          a.menu__link(href="#") Работы
      li.menu__item 
          a.menu__link(href="#") Отзывы
  
</template>

<script>
export default {
  name: 'menu',
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.menu {
  display: flex;
  height: 100%;
  align-items: center;
  @include opensans();
  font-size: 16px;
  font-weight: 600;
  color: #414c63;

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

    &_active {
      border-bottom: solid 3px #383bcf;
      .menu__link {
        color: #383bcf;
      }
    }
  }

  &__link {
    &:hover {
      color: #383bcf;
    }
  }
}

</style>