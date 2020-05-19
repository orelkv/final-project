<template lang="pug">
  .comment
    .comment__author
      .comment__avatar
        .avatar
          img.avatar__img(src='../../image/user.jpg')

      .comment__author-info
        h4.comment__author-name Александр Симаков
        span.comment__author-prof Менеджер

    .comment__content
      .comment__text
        p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.

      btnsResize
            
</template>


<script>

import btnsResize from './btns-resize'

export default {
  name: 'comment',
  components: {
    btnsResize,
  }
  
}
</script>



<style lang="postcss">
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.comment {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  height: 100%;


  &__author {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 30px;
    border-bottom: solid 1px rgba(31, 35, 45, .5);
    margin-bottom: 25px;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }

  &__author-info {
    display: flex;
    flex-direction: column;
    color: rgb(65, 76, 99);
    @include opensans();
  }

  &__author-name {
    font-size: 18px;
    font-weight: bold;
  }

  &__author-prof {
    font-size: 16px;
    opacity: .5;
    font-weight: 600;
    color: rgb(65, 76, 99);
      opacity: 0.5;
  }
  
  &__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr max-content;
    padding: 0 10px;
    height: 100%;
  }

  & p {
    color: rgba(65, 76, 99, 0.702);
    @include opensans();
    font-weight: 600;
    line-height: 1.875;
    font-size: 16px;
  }  
  &__text {
    margin-bottom: 60px;
  }
}
</style>