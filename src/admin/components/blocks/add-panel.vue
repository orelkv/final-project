<template lang='pug'>
  .add-panel 
    .add-panel__title
      h3.add-panel__title-text Добавление работы

    .add-panel__content
      .add-panel__load-img
        loadImg

      .add-panel__info.add-info
        loadForm  
</template>

<script>

import loadImg from './load-img';
import loadForm from './load-form';

export default {
  name: 'add-panel',
  components: {
    loadImg,
    loadForm,
  }
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.add-panel {
  display: grid;
  grid-template:
    "title" max-content
    "content" 1fr/1fr;
  padding: 25px 20px 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;

  &__title {
    grid-area: title;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  }

  &__title-text {
    @include opensans();
    font-size: 18px;
    font-weight: bold;
    color: #414c63;
  }

  &__content {
    grid-area: content;
    display: grid;
    grid-template: "screen info" 1fr/1fr 1fr;
    grid-gap: 30px;
    padding: 48px 10px 0;
  }

  &__load-img {
    grid-area: screen;
    height: 276px;
    border: dashed 1px #a1a1a1;
    background-color: #dee4ed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__info {
    grid-area: info;
  }
}

</style>