<template lang='pug'>
  .add-content
    .add-content__btn
    .add-content__text Добавить работу

</template>

<script>
export default {
  name: 'add-content',  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";


.add-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__btn {
    width: 146px;
    height: 146px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
      border-color: #999999;
      &:before {
        color: #999999;
      }
      & ~ {
        .add-content__text {
        color: #999999;
        }
      }
    }

    &:before {
      content: '+';
      @include opensans();
      font-size: 72px;
      color: rgb(255, 255, 255);
      display: block;
    }
  }
  &__text {
    @include opensans;
    width: 80%;
    font-size: 18px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    text-align: center;
  }
}

</style>