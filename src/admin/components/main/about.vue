<template lang='pug'>
  section.section.about
    .about__title-row
      h2.about__title.title-section Блок "Обо мне"
      .btn-add
        a(href="#").btn-add__link Добавить группу
    .about__content
      .skills
        ul.skills__list
          li.skills__item
            newSkill

          li.skills__item
            skill

  
</template>

<script>

import newSkill from '../blocks/new-skill'
import skill from '../blocks/skill'
export default {
  name: 'about',
  components: {
    newSkill,
    skill,
  }
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.about {
  display: grid;
  grid-template:
    "title" max-content
    "about-content" 1fr
    /1fr;

  &__title-row {
    grid-area: title;
    display: inline-flex;
    align-items: center;
  }

  &__content {
    grid-area: about-content;
    display: flex;
  }
    &__title {
    margin-right: 60px;
  }
}

.btn-add {
  &__link {
    @include opensans();
    font-size: 16px;
    font-weight: 600;
    color: #383bcf;
    display: flex;

    &:hover {
      text-decoration: underline;
    }

    &:before {
      content: "+";
      display: inline-block;
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background-color: #383bcf;
      text-align: center;
      margin-right: 13px;
      align-self: center;
      line-height: 1.3;
      color: #ffffff;
      text-decoration: none;
    }
  }
}

.skills {
  width: 100%;
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }
  &__item {
    height: 387px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
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