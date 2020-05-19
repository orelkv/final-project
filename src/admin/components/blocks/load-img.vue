<template lang='pug'>
  .load-img
    .load-img__text Перетащите, либо загрузите изображение
    .load-img__btn.btn-load
      button(type='button').btn-load__link Загрузить

</template>


<script>
export default {
  name: 'load-img',  
}
</script>


<style lang="pcss">
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.load-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__text {
    width: 219px;
    @include opensans();
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
    color: rgb(65, 76, 99);
    margin-bottom: 25px;
  }
}

.btn-load {
  &__link {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    padding: 15px 45px;
    border-radius: 25px;
    background-image: linear-gradient(to top, #006aed, #3f35cb);
  
    &:hover {
      background-image: linear-gradient(to top, #3f35cb, #006aed);
    }
  }
}

</style>