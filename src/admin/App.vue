<template lang="pug">
  .content
    .admin      

      .admin__header  
        headerTop

      .container.admin__container

        .admin__menu
          menuTop(
            @tabChanged='handleTabChange'
          )

        .admin__content
          router-view

</template>


<script>

import headerTop from './components/main/header';
import menuTop from './components/main/menu';
import comments from './components/main/comments';
import about from './components/main/about';
import works from './components/main/works';

export default {
  name: 'App',
  components: {
    headerTop,
    menuTop,
    comments,
    works,
    about
  },
  methods: {
    handleTabChange(tab) {
      this.$router.push(tab.href)
    }
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
  min-height: 100vh;
  position: relative;
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

.admin {
  display: flex;
  flex-direction: column;

  &__header {
    background-image: linear-gradient(to top, #3e3e59, #454573);
    padding: 25px 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }
}
</style>

