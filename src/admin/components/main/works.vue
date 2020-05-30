<template lang='pug'>
  section.section.works
    h2.about__title.title-section Блок "Работы"
    .works__content
      .works__add-panel
        addPanel

      .works__pages
        .pages
          ul.pages__list
            li.pages__item.pages__item_add
              addContent

            li.pages__item
              page

</template>


<script>

import addPanel from '../blocks/add-panel';
import addContent from '../blocks/add-content';
import page from '../blocks/page';


export default {
  name: 'works',
  components: {
    addPanel,
    addContent,
    page,
  }  
}
</script>



<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.works {
  display: flex;
  flex-direction: column;

  &__content {
    display: grid;
    grid-template:
      "add-panel" max-content
      "pages" max-content / 1fr;
  }

  &__add-panel {
    grid-area: add-panel;
    margin-bottom: 30px;

  }

  &__pages {
    grid-area: pages;
  }
}

.pages {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }

  &__item {
    /* height: 556px; */
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