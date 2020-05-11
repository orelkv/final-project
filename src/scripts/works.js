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
  }
};

const btns = {
  template: '#slider-btns',
  props: ['currentWorks', 'works', 'currentIndex'],
};

const preview = {
  template: '#slider-preview',
  components: {
    btns
  },
  props: ['currentWorks', 'works', 'currentIndex'],
};

const display = {
  template: '#slider-page',
  components: {
    preview: preview,
    info: info
  },
  props: ['currentWorks', 'works', 'currentIndex'],
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
    }
  },
  computed: {
    currentWorks() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfinite(value);
    }
  },
  methods: {
    // makeInfinite(value) {
    //   const worksAmount = this.works.length - 1;
    // },
    handleSlide(direction) {
      switch (direction) {
        case 'next':
          if(this.currentIndex<this.works.length - 1) {
            this.currentIndex++;
          }
          break;
        case 'prev':
          if(this.currentIndex>0) {
            this.currentIndex--;
          }
        break;
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