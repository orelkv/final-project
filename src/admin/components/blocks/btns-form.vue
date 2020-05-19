<template lang="pug">
  .btns-form
    button(type='reset').btns-form__reset Отмена
    .add-info__btn.btn-load
      button(type='submit').btn-load__link Загрузить

</template>


<script>
export default {
  name: 'btns-form'  
}
</script>


<style lang="postcss">
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.btns-form {
  display: flex;
  align-content: center;
  justify-content: flex-end;

  &__reset {
    margin-right: 60px;
    color: #383bcf;
    @include opensans();
    font-size: 16px;
    font-weight: 600;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>