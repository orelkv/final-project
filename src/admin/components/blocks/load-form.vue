<template lang='pug'>
  form.load-form
    .load-form__row
      label.load-form__label
        span.load-form__row-name Название
        input(type='text' name='name-works' required).load-form__input
    .load-form__row
      label.load-form__label
        span.load-form__row-name Ссылка
        input(type='text' name='name-works' required).load-form__input
    .load-form__row.load-form__row_textarea
      label.load-form__label
        span.load-form__row-name Описание
        textarea(name='name-works' required).load-form__input.load-form__input_textarea
    .load-form__row
      label.load-form__label
        span.load-form__row-name Добавление тега
        input(type='text' name='name-works' required).load-form__input
    .load-form__row
      .load-form__btns
        btnsForm

</template>


<script>
import btnsForm from './btns-form'
export default {
  name: 'load-form',
  components: {
    btnsForm
  }
  
}
</script>


<style lang="postcss">
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.load-form {
  display: flex;
  flex-direction: column;

  &__row {
    width: 100%;
    margin-bottom: 27px;
    border-bottom: solid 2px #414c63;

    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }

    &_textarea {
      border-bottom: none;
    }
  }

  &__label {
    width: 100%;
    display: flex;
    flex-direction: column;
    @include opensans();
    font-size: 16px;
    font-weight: 600;
  }

  &__row-name {
    @include opensans();
    font-size: 16px;
    font-weight: 600;
    opacity: 0.5;
    color: rgb(65, 76, 99);
    margin-bottom: 17px;
  }

  &__input {
    @include opensans();
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    color: #414c63;
    margin-bottom: 15px;
    outline: none;
    border: none;
    

    &_textarea {
      height: 137px;
      padding: 0 10px;
      line-height: 1.88;
      resize: none;
      overflow: auto;
      border: solid 1px rgba(46, 65, 43, .2);
      margin-bottom: 0;
    }
  }
}

</style>