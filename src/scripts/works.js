import Vue from 'vue';

const tags = {
  template: '#slider-tags',
  props: ['tags'],
};

const info = {
  template: '#slider-info',
  components: {
    tags
  },
  props: ['currentWorks', 'works'],
  computed: {
    tagsArray() {
      return this.currentWorks.skills.split(',')
    }
  },
};

const btns = {
  template: '#slider-btns',
  props: ['currentWorks', 'works', 'currentIndex', 'changeSlide'],
};

const preview = {
  template: '#slider-preview',
  components: {
    btns
  },
  methods: {
    calcWidth(direction) {
      const varContent = this.$refs.varContent;
      const widthContent = parseInt(getComputedStyle(varContent).getPropertyValue('width'));
      const varItem = this.$refs.varItem[0];
      const widthItem = parseInt(getComputedStyle(varItem).getPropertyValue('width'));
      const slideInContent = widthContent/widthItem;
      this.$emit('calcWidth', slideInContent);
      this.$emit('slide', direction);
    },
  },
  props: ['currentWorks', 'works', 'indexSlide', 'currentIndex', 'changeSlide'],
};

const display = {
  template: '#slider-page',
  components: {
    preview: preview,
    info: info
  },
  methods: {
    calcWidth(index) {
      this.$emit('calcWidth', index);
    },
  },
  props: ['currentWorks', 'indexSlide', 'works', 'currentIndex', 'changeSlide'],
};

new Vue ({
  el: '#slider-components',
  template: '#slider-pages',
  components: {
    display: display
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      slideInContent: 0,

    }
  },
  computed: {
    currentWorks() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
  
    moveSlide(index) {
      this.currentIndex = index;
    },

    calcWidth(index) {
      this.slideInContent = index;
    },


    handleSlide(direction) {
      
      switch (direction) {
        case 'next':
          if(this.currentIndex<this.works.length - 1) {
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

    changeSlide(direction) {
      const list = document.querySelector('.slider-pages__var-list')
      if (this.currentIndex < this.slideInContent-1) {
        this.handleSlide(direction)
      }
      else {
        list.style.transform = 'translateX(-100 + '%')';
        this.handleSlide(direction)
      }
    },

    makeArrayImage(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/preview/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.makeArrayImage(data);
  }
});