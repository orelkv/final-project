<template lang='pug'>
  .authorize
    .authorize__wrap
      .authorize__content
        .authorize__title Авторизация
        button.authorize__close

        .authorize__form
          form.form(@submit.prevent='login')
            .form__row
              label.form__label
                input.form__input(type='text' v-model='user.name' )
                span.form__title Логин
                span.form__icon.form__icon_avatar
            .form__row
              label.form__label
                input.form__input(type='text' v-model='user.password' )
                span.form__title Пароль
                span.form__icon.form__icon_pass
            button(type="submit").form__btn Отправить

</template>

<script>
import $axios from '../../requests';

// const baseUrl = 'https://webdev-api.loftschool.com';
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzMiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA0MzQ3MTIsImV4cCI6MTU5MDQ1MjcxMiwibmJmIjoxNTkwNDM0NzEyLCJqdGkiOiJTZ0psS2J2bmJHUnRob1RiIn0.T9oSJFis0b3sSXoJeByqnAn0NQXProVLXYgY4z63qrA';



export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await $axios.post('/login', this.user);
        const token = response.data.token;
        localStorage.setItem('token', token);
        $axios.defaults.headers['Authorization'] = `Bearer ${token}`;

        this.$router.replace('/')

      } catch (error) {
        console.log(error)
      }
    }
  }
  
}
</script>

<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.authorize {
  position: absolute;  
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  background: url('../../../images/content/rock-fest.jpg') center center / cover no-repeat;


  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(45, 60, 78, .702);
    width: 100%;
    height: 100%;
  }

  &__content {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 80px;
    border-radius: 1px;
    position: relative;
  }

  &__title {
    margin-bottom: 30px;
    @include opensans();
    font-size: 36px;
    font-weight: 600;
    color: rgb(65, 76, 99);
  }

  &__close {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 30px;
    right: 30px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: block;
      background: svg-load('close.svg', stroke-width='5px', stroke='rgb(65, 76, 99)') center center / contain no-repeat;
    }

    &:hover:before {
      background: svg-load('close.svg', stroke-width='5px', stroke='#000000') center center / contain no-repeat;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  min-width: 404px;

  &__row {
    margin-bottom: 40px;
  }

  &__label {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 45px 10px 20px 45px;
    border-bottom: 2px solid rgb(65, 76, 99);
  }

  &__title {
    position: absolute;
    top: 0;
    left: 45px;
    @include opensans();
    font-weight: 600;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.302);
  }

  &__input {
    width: 100%;
    border: none;
    outline: none;
    @include opensans();
    font-size: 18px;
    color: rgb(65, 76, 99);
    font-weight: bold;

    &:focus {
      & ~ {
        .form__icon {
          opacity: 1;
        }
        .form__title {
    color: rgb(65, 76, 99);
        }
      }
    }
  }

  &__icon {
    position: absolute;
    left: 0;
    top: 45px;
    width: 25px;
    height: 30px;
    opacity: .302;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: block;
    }
    &_avatar:before {
      background: svg-load('avatar.svg', stroke='rgba(65, 76, 99, 0.302)') center center / contain no-repeat;
    }
    &_pass:before {
      background: svg-load('key.svg', stroke='rgba(65, 76, 99, 0.302)') center center / contain no-repeat;
    }
  }

  &__btn {
    @include opensans();
    font-size: 18px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    text-transform: uppercase;

    padding: 30px 120px;
    border-radius: 50px 0;
    background-image: linear-gradient( 0deg, rgb(173,0,237) 0%, rgb(129,0,240) 48%, rgb(85,0,242) 100%);

    &:hover {
      background-image: linear-gradient( 0deg, rgb(85,0,242) 0%, rgb(129,0,240) 48%,  rgb(173,0,237) 100%);

    }
  }

}
</style>