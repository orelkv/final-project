<template lang='pug'>
  section.section.comments
    h2.about__title.title-section Блок "Отзывы"
    .comments__content
      newComment

      .comments
        .all-comment
          ul.all-comments__list
            li.all-comments__item.all-comments__item_add
              addContent

            li.all-comments__item
              comment
</template>

<script>

import newComment from '../blocks/new-comments';
import addContent from '../blocks/add-content';
import comment from '../blocks/comment';
export default {
  name: 'comments',
  components: {
    newComment,
    addContent,
    comment,
  }
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.comments {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    flex-direction: column;    
  }
}


.all-comments {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }

  &__item {
    /* min-height: 380px; */
    background-color: rgb(255, 255, 255);
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);

    &_add {
      display: flex;
      box-shadow: none;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
    }
  }
}
.title-section {
  @include opensans();
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
  margin: 50px 0;
  margin-right: 50px;
}


</style>