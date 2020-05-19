<template lang='pug'>
  header.header
    .container.header__container
      .header__logo
        .user
          .user__avatar.avatar
            img(src='../../image/user.jpg').avatar__img

          .user__name Орлов Алексей


      .header__name
        .title-panel Панель администрирования


      .header__btn
        .btn-close
          a.btn-close__link Выйти


  
</template>

<script>
export default {
  name: 'header',
  
}
</script>

<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.header {
  background-image: linear-gradient(to top, #3e3e59, #454573);
  padding: 30px 0;
  &__container {
    grid-area: header;
    grid-gap: 0 28px;
    display: grid;
    grid-template: "logo title btn" 1fr / max-content 1fr max-content;
    align-items: center;
    color: #ffffff;
    @include opensans();
  }

  &__logo {
    grid-area: logo;
  }

  &__name {
    grid-area: title;
  }

  &__btn {
    grid-area: btn;
    justify-self: end;
  }
}

.user {
  font-size: 18px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;

  &__avatar {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__name {
    line-height: 0;
  }
}

.title-panel {
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
}

.btn-close {
  opacity: 0.7;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}

</style>