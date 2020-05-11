import Vue from 'vue';

new Vue ({
  el: '#hamburger',
  data: {
    activeClass: 'false',
  },

  method: {
    addClass() { 
      this.activeClass = true   
    }
  }


})