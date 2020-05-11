import Vue from 'vue';

new Vue ({
  el: '#header',
  data: {
    activeClass: '',
  },

  methods: {
    addClass() { 
      this.activeClass = true   
    },
    removeClass() {
      this.activeClass = false   
    }
  },
})