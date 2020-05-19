<template lang="pug">
  .new-comments
    .add-panel 
      .add-panel__title
        h3.add-panel__title-text Новый отзыв

      .add-panel__content
        .add-panel__load-avatar
          .load-avatar
            .load-avatar__wrap
              .load-avatar__img
            a.load-avatar__link(href='#') Добавить фото

        .add-panel__load-comments.load-comments
          form.load-form
            .load-form__row
              label.load-form__label
                span.load-form__row-name Имя автора
                input(type='text' name='name-author' required).load-form__input
            .load-form__row  
              label.load-form__label
                span.load-form__row-name Титул автора
                input(type='text' name='Prof-author' required).load-form__input
            
            .load-form__row.load-form__row_textarea
              label.load-form__label
                span.load-form__row-name Отзыв
                textarea(name='comments' required).load-form__input.load-form__input_textarea

            .load-form__row.load-form__row_btn
              .load-form__btns.btns-form
                button(type='reset').btns-form__reset Отмена
                .add-info__btn.btn-load
                  button(type='submit').btn-load__link Сохранить                     

</template>


<script>
export default {
  name: 'new-comments'
  
}
</script>


<style lang="postcss">
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.new-comments {
  margin-bottom: 30px;

  .add-panel {
    &__content {
      display: flex;
    }
    &__load-avatar {
      margin-right: 30px;
    }
  }
}

.load-avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgb(222, 228, 237);
    width: 200px;
    height: 200px;
    margin-bottom: 25px;
  }
  &__img {
    width: 90px;
    height: 115px;
    background: svg-load('user.svg', fill='#ffffff') center center / cover no-repeat;
  }
  &__link {
  @include opensans();
  font-size: 16px;
  color: rgb(56, 59, 207);
  font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}

.load-comments {
  padding-right: 20%;
  .load-form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    &__row {
      width: calc(100%/2 - 30px);
      &_textarea {
        width: 100%;
      }      
      &_btn {
        width: 100%;
      }
    }
  }
}

</style>