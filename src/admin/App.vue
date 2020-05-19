<template lang="pug">
  .content
    headerTop

    .admin-panel
      .container.admin-panel__container
        aside.admin-panel__menu
          menuTop

        main.admin-panel__content
          about
          
          works
          
          comments          

</template>


<script>

import headerTop from './components/main/header';
import menuTop from './components/main/menu';
import about from './components/main/about';
import works from './components/main/works';
import comments from './components/main/comments';

export default {
  name: 'App',
  components: {
    headerTop,
    menuTop,
    about,
    works,
    comments,
  }
};
</script>


<style lang='pcss'>
@import "./components/css/mixin.pcss";


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

.admin-panel {
  padding-bottom: 30px;
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
</style>

