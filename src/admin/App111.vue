<template lang="pug">
  .content
    header.header
      .container.header__container
        .header__logo
          .user
            .user__avatar.avatar
              img(src='./image/user.jpg').avatar__img

            .user__name Орлов Алексей


        .header__name
          .title-panel Панель администрирования


        .header__btn
          .btn-close
            a.btn-close__link Выйти




    .admin-panel
      .container.admin-panel__container
        aside.admin-panel__menu
          .menu
            ul.menu__list
              li.menu__item.menu__item_active
                a.menu__link(href="#") Обо мне
              li.menu__item
                  a.menu__link(href="#") Работы
              li.menu__item 
                  a.menu__link(href="#") Отзывы


        main.admin-panel__content
          section.section.about
            .about__title-row
              h2.about__title.title-section Блок "Обо мне"
              .btn-add
                a(href="#").btn-add__link Добавить группу
            .about__content
              .skills
                ul.skills__list
                  li.skills__item
                    .skill.new-skill
                      form.skill__form(action='' method='')
                        .skill__row.skill__row_title
                          input(type='text' name='skillTitle' placeholder='Название новой группы').skill__input
                          .skill__btn
                            a.skill__link_yes.skill__link
                            a.skill__link_no.skill__link
                            a.skill__link_add.skill__link
                        .skill__tech
                          .skill__tech-get
                          .skill__row.skill__tech-add
                            input(type='text' name='skill' placeholder='Новый навык').skill__input
                            .skill__input-wrap
                              input(type='text' name='skillPercent' placeholder='100').skill__input.skill__input_percent
                            .skill__add-button
                              a.skill__add-tech
              
                  li.skills__item
                    .skill
                      form.skill__form
                        .skill__row.skill__row_title
                          input(type='text' name='skillTitle' placeholder='Название новой группы').skill__input
                          .skill__btn
                            a.skill__link_yes.skill__link
                            a.skill__link_no.skill__link
                            a.skill__link_add.skill__link
                        .skill__tech
                          .skill__tech-get
                            .skill__row
                              input(type='text' name='skill' placeholder='Новый навык').skill__input
                              .skill__input-wrap
                                input(type='text' name='skillPercent' placeholder='100').skill__input.skill__input_percent
                              .skill__btn
                                a.skill__link_yes.skill__link
                                a.skill__link_no.skill__link
                                a.skill__link_add.skill__link
                                a.skill__link_del.skill__link
                            .skill__row
                              input(type='text' name='skill' placeholder='Новый навык').skill__input
                              .skill__input-wrap
                                input(type='text' name='skillPercent' placeholder='100').skill__input.skill__input_percent
                              .skill__btn
                                a.skill__link_yes.skill__link
                                a.skill__link_no.skill__link
                                a.skill__link_add.skill__link
                                a.skill__link_del.skill__link
                            .skill__row
                              input(type='text' name='skill' placeholder='Новый навык').skill__input
                              .skill__input-wrap
                                input(type='text' name='skillPercent' placeholder='100').skill__input.skill__input_percent
                              .skill__btn
                                a.skill__link_yes.skill__link
                                a.skill__link_no.skill__link
                                a.skill__link_add.skill__link
                                a.skill__link_del.skill__link
                            .skill__row
                              input(type='text' name='skill' placeholder='Новый навык').skill__input
                              .skill__input-wrap
                                input(type='text' name='skillPercent' placeholder='100').skill__input.skill__input_percent
                              .skill__btn
                                a.skill__link_yes.skill__link
                                a.skill__link_no.skill__link
                                a.skill__link_add.skill__link
                                a.skill__link_del.skill__link
                          .skill__row.skill__tech-add
                            input(type='text' name='skill' placeholder='Новый навык').skill__input
                            .skill__input-wrap
                              input(type='text' name='skillPercent' placeholder='100').skill__input.skill__input_percent
                            .skill__add-button
                              a.skill__add-tech
          
          
          section.section.works
            h2.works__title.title-section Блок "Работы"
            .works__content
              .works__add-panel
                .add-panel 
                  .add-panel__title
                    h3.add-panel__title-text Добавление работы

                  .add-panel__content
                    .add-panel__load-img
                      .load-img
                        .load-img__text Перетащите, либо загрузите изображение
                        .load-img__btn.btn-load
                          button(type='button').btn-load__link Загрузить

                    .add-panel__info.add-info
                      form.load-form
                        .load-form__row
                          label.load-form__label
                            span.load-form__row-name Название
                            input(type='text' name='name-works').load-form__input
                        .load-form__row
                          label.load-form__label
                            span.load-form__row-name Ссылка
                            input(type='text' name='name-works').load-form__input
                        .load-form__row.load-form__row_textarea
                          label.load-form__label
                            span.load-form__row-name Описание
                            textarea(name='name-works').load-form__input.load-form__input_textarea
                        .load-form__row
                          label.load-form__label
                            span.load-form__row-name Добавление тега
                            input(type='text' name='name-works').load-form__input
                        .load-form__row
                          .load-form__btns
                            .btns-form
                              button(type='reset').btns-form__reset Отмена
                              .add-info__btn.btn-load
                                button(type='submit').btn-load__link Загрузить


              .works__pages
                .pages
                  ul.pages__list
                    li.pages__item.pages__item_add
                      .add-content
                        .add-content__btn
                        .add-content__text Добавить работу

                    li.pages__item
                      .page
                        .page__screen
                          .page-photo
                            img(src='./image/preview/autumn.jpg').page-photo__img

                        .page__content
                          h4.page__title Сайт школы образования
                          .page__text
                            p Этот парень проходил обучение в школе веб-разработки LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                          a.page__link http://LoftSchool.ru
                          .page__btns
                            .btns-resize
                              a.btns-resize__link.btns-resize__link_write(href='#') Править
                              a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                                        
                    li.pages__item
                      .page
                        .page__screen
                          .page-photo
                            img(src='./image/preview/mountains.jpg').page-photo__img

                        .page__content
                          .page__content-text
                            h4.page__title Сайт школы образования
                            .page__text
                              p Этот парень проходил обучение в школе веб-разработки LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                            a.page__link http://LoftSchool.ru
                          .page__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                    
                    li.pages__item
                      .page
                        .page__screen
                          .page-photo
                            img(src='./image/preview/car.jpg').page-photo__img

                        .page__content
                          h4.page__title Сайт школы образования
                          .page__text
                            p Этот парень проходил обучение в школе веб-разработки LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                          a.page__link http://LoftSchool.ru
                          .page__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                    
                    li.pages__item
                      .page
                        .page__screen
                          .page-photo
                            img(src='./image/preview/tram.jpg').page-photo__img

                        .page__content
                          h4.page__title Сайт школы образования
                          .page__text
                            p Этот парень проходил обучение в школе веб-разработки LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                          a.page__link http://LoftSchool.ru
                          .page__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить



          
          section.section.comments
            h2.comments__title.title-section Блок "Отзывы"
            .comments__content
              .new-comments
                .add-panel 
                  .add-panel__title
                    h3.add-panel__title-text Новый отзыв

                  .add-panel__content
                    .add-panel__load-avatar
                      .load-avatar
                        .load-avatar__wrap
                          .load-avatar__img
                        a.load-avatar__link(href='#') Добавить фото

                    .add-panel__load-comments.load-comments
                      form.load-form
                        .load-form__row
                          label.load-form__label
                            span.load-form__row-name Имя автора
                            input(type='text' name='name-author').load-form__input
                        .load-form__row  
                          label.load-form__label
                            span.load-form__row-name Титул автора
                            input(type='text' name='Prof-author').load-form__input
                        
                        .load-form__row.load-form__row_textarea
                          label.load-form__label
                            span.load-form__row-name Отзыв
                            textarea(name='comments').load-form__input.load-form__input_textarea

                        .load-form__row.load-form__row_btn
                          .load-form__btns.btns-form
                            button(type='reset').btns-form__reset Отмена
                            .add-info__btn.btn-load
                              button(type='submit').btn-load__link Сохранить                     



              .comments
                .all-comments
                  ul.all-comments__list
                    li.all-comments__item.all-comments__item_add
                      .add-content
                        .add-content__btn
                        .add-content__text Добавить работу

                    li.all-comments__item
                      .comment
                        .comment__author
                          .comment__avatar
                            .avatar
                              img.avatar__img(src='./image/user.jpg')

                          .comment__author-info
                            h4.comment__author-name Александр Симаков
                            span.comment__author-prof Менеджер


                        .comment__content
                          .comment__text
                            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                          
                          .comment__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                    li.all-comments__item
                      .comment
                        .comment__author
                          .comment__avatar
                            .avatar
                              img.avatar__img(src='./image/user.jpg')

                          .comment__author-info
                            h4.comment__author-name Александр Симаков
                            span.comment__author-prof Менеджер


                        .comment__content
                          .comment__text
                            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                          
                          .comment__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                    li.all-comments__item
                      .comment
                        .comment__author
                          .comment__avatar
                            .avatar
                              img.avatar__img(src='./image/user.jpg')

                          .comment__author-info
                            h4.comment__author-name Александр Симаков
                            span.comment__author-prof Менеджер


                        .comment__content
                          .comment__text
                            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                          
                          .comment__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                    li.all-comments__item
                      .comment
                        .comment__author
                          .comment__avatar
                            .avatar
                              img.avatar__img(src='./image/user.jpg')

                          .comment__author-info
                            h4.comment__author-name Александр Симаков
                            span.comment__author-prof Менеджер


                        .comment__content
                          .comment__text
                            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                          
                          .comment__btns.btns-resize
                            a.btns-resize__link.btns-resize__link_write(href='#') Править
                            a.btns-resize__link.btns-resize__link_del(href='#') Удалить
                          
                          

                









</template>



<script>
export default {};
</script>





<style lang='pcss'>
@import "./fonts/font.pcss";

@mixin desktopHd() {
  @media screen and (max-width: 1800px) {
    @content;
  }
}

@mixin desktop() {
  @media screen and (max-width: 1200px) {
    @content;
  }
}

@mixin laptop() {
  @media screen and (max-width: 980px) {
    @content;
  }
}

@mixin tablets() {
  @media screen and (max-width: 768px) {
    @content;
  }
}

@mixin tablets-min() {
  @media screen and (max-width: 580px) {
    @content;
  }
}

@mixin phones() {
  @media screen and (max-width: 480px) {
    @content;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  min-height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  min-height: 100%;
  -moz-osx-font-smoothing: grayscale;
  color: #414c63;
  line-height: 1.42;
  background-color: #ffffff;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
}

.container {
  margin: 0 auto;
  max-width: 1080px;
  width: 95%;
  height: 100%;
  margin: 0 auto;

  /* @include desktop {
    max-width: 1090px;
    width: 95%;
  }

  @include tablets {
    max-width: 688px;
    width: 95%;
  }

  @include phones {
    width: 85%;
  } */
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.content {
  display: grid;
  grid-template:
    "header" max-content
    "content" 1fr
    / 1fr;
}

.header {
  background-image: linear-gradient(to top, #3e3e59, #454573);
  padding: 30px 0;
  &__container {
    grid-area: header;
    grid-gap: 0 28px;
    display: grid;
    grid-template: "logo title btn" 1fr / max-content 1fr max-content;
    align-items: center;
    color: #ffffff;
    @include opensans();
  }

  &__logo {
    grid-area: logo;
  }

  &__name {
    grid-area: title;
  }

  &__btn {
    grid-area: btn;
    justify-self: end;
  }
}

.user {
  font-size: 18px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;

  &__avatar {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__name {
    line-height: 0;
  }
}

.title-panel {
  opacity: 0.5;
  font-size: 14px;
  font-weight: normal;
}

.btn-close {
  opacity: 0.7;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}

.admin-panel {
  &__container {
    display: grid;
    grid-template:
      "aside" max-content
      "admin-panel" 1fr / 1fr;
  }
  &__menu {
    grid-area: aside;
  }
  &__content {
    grid-area: admin-panel;
  }
}

.menu {
  display: flex;
  height: 100%;
  align-items: center;
  @include opensans();
  font-size: 16px;
  font-weight: 600;
  color: #414c63;

  &__list {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__item {
    position: relative;
    height: 100%;
    padding: 30px 29px;
    display: flex;
    align-items: center;
    justify-content: center;

    &_active {
      border-bottom: solid 3px #383bcf;
      .menu__link {
        color: #383bcf;
      }
    }
  }

  &__link {
    &:hover {
      color: #383bcf;
    }
  }
}

.title-section {
  @include opensans();
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
  margin: 50px 0;
}

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

.pages {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }

  &__item {
    height: 556px;
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
    width: 50%;
    font-size: 18px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    text-align: center;
  }
}

.page {
  display: flex;
  flex-direction: column;
  
  &__content {
    display: flex;
    flex-direction: column;
    padding: 35px 30px;
    justify-content: space-between;
  }

  &__content-text {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include opensans();
    font-size: 18px;
    color: rgb(65, 76, 99);
    font-weight: bold;
    margin-bottom: 25px;
  }

  &__text {
    margin-bottom: 25px;

    & p {
      @include opensans();
    color: rgba(65, 76, 99, 0.702);
    line-height: 1.875;
    font-size: 16px;
    font-weight: 600;
    }
  }

  &__link {
    @include opensans();
    font-size: 16px;
    color: rgb(56, 59, 207);
    margin-bottom: 40px;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
}

.btns-resize {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__link {
    @include opensans();
    font-weight: 600;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.502);
    display: inline-block;
    &:after {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-left: 10px;
    }
    &_write:after {
        background: svg-load("pencil.svg", fill= "#383bcf") center center /
          contain no-repeat;
    }
    &_del:after {
        background: svg-load("cross.svg", fill= "#c92e2e") center center /
          contain no-repeat;
    }
    &:hover {
      color: rgb(65, 76, 99);
    }
  }
}

.comments {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    flex-direction: column;    
  }
}

.new-comments {
  margin-bottom: 30px;

  .add-panel {
    &__content {
      display: flex;
    }
    &__load-avatar {
      margin-right: 30px;
    }
  }
}

.load-avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgb(222, 228, 237);
    width: 200px;
    height: 200px;
    margin-bottom: 25px;
  }
  &__img {
    width: 90px;
    height: 115px;
    background: svg-load('user.svg', fill='#ffffff') center center / cover no-repeat;
  }
  &__link {
  @include opensans();
  font-size: 16px;
  color: rgb(56, 59, 207);

    &:hover {
      text-decoration: underline;
    }
  }
}

.load-comments {
  padding-right: 20%;
  .load-form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    &__row {
      width: calc(100%/2 - 30px);
      &_textarea {
        width: 100%;
      }      
      &_btn {
        width: 100%;
      }
    }
  }
}

.all-comments {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }

  &__item {
    height: 380px;
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

.comment {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  height: 100%;


  &__author {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 30px;
    border-bottom: solid 1px rgba(31, 35, 45, .5);
    margin-bottom: 25px;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }

  &__author-info {
    display: flex;
    flex-direction: column;
    color: rgb(65, 76, 99);
    @include opensans();
  }

  &__author-name {
    font-size: 18px;
    font-weight: bold;
  }

  &__author-prof {
    font-size: 16px;
    opacity: .5;
    font-weight: 600;
    color: rgb(65, 76, 99);
      opacity: 0.5;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    height: 100%;
  }

  &__text {
    margin-bottom: 25px;
  }

    & p {
      color: rgba(65, 76, 99, 0.702);
      @include opensans();
      font-weight: 600;
      line-height: 1.875;
      font-size: 16px;
    }  
}


</style>

