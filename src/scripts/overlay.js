import Vue from 'vue';
import $ from 'jquery';

new Vue ({
  el: '#connect',
  data: {
      currentIndexOverlay: '',
  },

  methods: {
    closeOverlay() {
      $('#overlay').removeClass('open')
    },

    closeMessage() {
      $('.overlay__footer-message').removeClass('open')
    }
  }
})