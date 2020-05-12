import Vue from 'vue';
// import Flickity from 'vue-flickity';

new Vue({
  el: '#comments__content',
  template: '#slider-comments',
  // components: {
  //   Flickity
  // },
  
  data() {
    return {
      // flickityOptions: {
      //   initialIndex: 3,
      //   prevNextButtons: false,
      //   pageDots: false,
      //   wrapAround: true,       
      // },
      comments: [],
    };
  },
  
  methods: {
    // next() {
    //   this.$refs.flickity.next();
    // },
    
    // previous() {
    //   this.$refs.flickity.previous();
    // },

    makeArrayImage(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/comments/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
  },  

  created() {
    const data = require('../data/reviews.json');
    this.comments = this.makeArrayImage(data);
    this.currentComments = this.comments[0];
  }
});