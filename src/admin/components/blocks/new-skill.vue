<template lang='pug'>
  .skill.new-skill
    form.skill__form(action='' method='')
      .skill__row.skill__row_title
        input(type='text' name='skillTitle' placeholder='Название новой группы' required).skill__input
        .skill__btn
          a.skill__link_yes.skill__link
          a.skill__link_no.skill__link
          a.skill__link_add.skill__link
      .skill__tech
        .skill__tech-get
        .skill__row.skill__tech-add
          input(type='text' name='skill' placeholder='Новый навык' required).skill__input
          .skill__input-wrap
            input(type='text' name='skillPercent' placeholder='100' required).skill__input.skill__input_percent
          .skill__add-button
            a.skill__add-tech

</template>


<script>
export default {
  name: 'new-skill'
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.skill {
  height: 100%;
  &__form {
    height: 100%;
    padding: 24px 20px 30px;
    display: flex;
    flex-direction: column;
  }

  &__row {
    width: 100%;
    padding: 0 10px;
    display: inline-grid;
    grid-gap: 0 20px;
    grid-template: "text percent btn" 1fr / 1fr 75px 90px;

    &_title {
      border-bottom: 1px solid rgba(31, 35, 45, 0.5);
    }
  }

  &__input-wrap {
    position: relative;
    grid-area: percent;

    &:before {
      content: "%";
      position: absolute;
      display: block;
      right: 10px;
      top: 0;
      opacity: 0.7;
      font-size: 16px;
      font-weight: normal;
      color: rgb(65, 76, 99);
    }
  }

  &__input {
    grid-area: text;
    @include opensans();
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 14px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #414c63;
    opacity: 0.51;

    &:focus {
      border-bottom: 1px solid #000000;
      opacity: 1;
    }

    &_percent {
      padding-left: 10px;
    }
  }

  &__btn {
    grid-area: btn;
    justify-self: end;
  }

  &__link {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 22px;
    &:before {
      content: "";
      display: block;
      width: 15px;
      height: 12px;
    }

    &_yes {
      display: none;
      &:before {
        background: svg-load("tick.svg", fill= "#00d70a") center center /
          contain no-repeat;
      }
    }

    &_no {
      display: none;
      &:before {
        background: svg-load("cross.svg", fill= "#bf2929") center center /
          contain no-repeat;
      }
    }

    &_add {
      &:before {
        opacity: 0.5;
        background: svg-load("pencil.svg", fill= "#414c63") center center /
          contain no-repeat;
      }
    }

    &_del {
      &:before {
        opacity: 0.5;
        background: svg-load("trash.svg", fill= "#414c63") center center /
          contain no-repeat;
      }
    }
    &:hover:before {
      opacity: 1;
    }
  }

  &__tech {
    height: 100%;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__tech-get {
    .skill__input {
      font-size: 16px;
      font-weight: normal;
    }
  }

  &__tech-add {
    position: relative;
    width: 70%;
    align-self: center;
    display: grid;
    grid-gap: 0 10px;
    grid-template: "text percent" 1fr/1fr 75px;

    .skill__input {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: normal;
      grid-area: text;
      padding-left: 20px;
      border-bottom: 1px solid #1f232d;
      &_percent {
        grid-area: percent;
        padding-left: 10px;
      }
    }
  }

  &__add-tech {
    position: absolute;
    bottom: 0;
    right: -55px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #006aed, #3f35cb);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-image: linear-gradient(to top, #3f35cb, #006aed);
    }

    &:before {
      content: "+";
      display: block;
      font-family: OpenSans;
      font-size: 30px;
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>