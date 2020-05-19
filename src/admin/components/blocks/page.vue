<template lang='pug'>
  .page
    .page__screen
      .page-photo
        img(src='../../image/preview/autumn.jpg').page-photo__img

    .page__content
      h4.page__title Сайт школы образования
      .page__text
        p Этот парень проходил обучение в школе веб-разработки LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
      a.page__link http://LoftSchool.ru
      .page__btns
        btnsResize

</template>


<script>

import btnsResize from './btns-resize'

export default {
  name: 'page',
  components: {
    btnsResize,
  }
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.page {
  display: flex;
  flex-direction: column;
  
  &__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr max-content max-content;
    padding: 35px 30px;
  }

  &__title {
    @include opensans();
    font-size: 18px;
    color: rgb(65, 76, 99);
    font-weight: bold;
    margin-bottom: 25px;
  }

  &__text {
    margin-bottom: 25px;

    & p {
      @include opensans();
      color: rgba(65, 76, 99, 0.702);
      line-height: 1.875;
      font-size: 16px;
      font-weight: 600;
    }
  }

  &__link {
    @include opensans();
    font-size: 16px;
    color: rgb(56, 59, 207);
    margin-bottom: 40px;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>