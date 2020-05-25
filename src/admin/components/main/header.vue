<template lang='pug'>
  header.header
    .container.header__container
      .header__logo
        user

      .header__name
        .title-panel Панель администрирования

      .header__btn
          button.btn-close(
            type='button'
            @click=''
            ) Выйти

  
</template>

<script>

import user from '../blocks/user';

export default {
  name: 'header',  
  components: {
    user,
  }
}
</script>

<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.header {
  &__container {
    display: flex;
    align-items: center;
    color: #ffffff;
    @include opensans();
  }

  &__logo {
    margin-right: 28px;
  }

  &__btn {
    margin-left: auto;
  }
}


.title-panel {
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
}

.btn-close {
  color: #ffffff;
  @include opensans();
  opacity: 0.7;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}

</style>