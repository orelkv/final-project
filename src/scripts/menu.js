import Vue from 'vue';

new Vue ({
  el: '#header',
  data: {
    activeClass: 'false',
  },

  method: {
    addClass() { 
      this.activeClass = true   
    }
  }


})