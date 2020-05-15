import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: '#comments__content',
  template: '#slider-comments',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        cellAlign: "left",      
      },
      comments: [],
      currentIndex: 0,
    };
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },

    makeArrayImage(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/comments/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case 'next':
          if(this.currentIndex<this.comments.length - 1) {
            this.currentIndex++;
          }
          break;
        case 'prev':
          if(this.currentIndex > 0) {
            this.currentIndex--;
          }
        break;
      }
    },

  },  

  created() {
    const data = require('../data/reviews.json');
    this.comments = this.makeArrayImage(data);
  }
});