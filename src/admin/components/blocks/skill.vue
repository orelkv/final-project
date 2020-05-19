<template lang='pug'>
  .skill
    form.skill__form
      .skill__row.skill__row_title
        input(type='text' name='skillTitle' placeholder='Название новой группы' required).skill__input
        .skill__btn
          a.skill__link_yes.skill__link
          a.skill__link_no.skill__link
          a.skill__link_add.skill__link
      .skill__tech
        .skill__tech-get
          .skill__row
            input(type='text' name='skill' placeholder='Новый навык' required).skill__input
            .skill__input-wrap
              input(type='text' name='skillPercent' placeholder='100' required).skill__input.skill__input_percent
            .skill__btn
              a.skill__link_yes.skill__link
              a.skill__link_no.skill__link
              a.skill__link_add.skill__link
              a.skill__link_del.skill__link
        .skill__row.skill__tech-add
          input(type='text' name='skill' placeholder='Новый навык' required).skill__input
          .skill__input-wrap
            input(type='text' name='skillPercent' placeholder='100' required).skill__input.skill__input_percent
          .skill__add-button
            a.skill__add-tech

</template>


<script>
export default {
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";


</style>