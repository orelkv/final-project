<template lang='pug'>
  .btns-resize
    a.btns-resize__link.btns-resize__link_write(href='#') Править
    a.btns-resize__link.btns-resize__link_del(href='#') Удалить

</template>


<script>
export default {
  
}
</script>


<style lang='pcss'>
@import "../css/font.pcss";
@import "../css/mixin.pcss";

.btns-resize {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__link {
    @include opensans();
    font-weight: 600;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.502);
    display: inline-block;
    &:after {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-left: 10px;
    }
    &_write:after {
        background: svg-load("pencil.svg", fill= "#383bcf") center center /
          contain no-repeat;
    }
    &_del:after {
        background: svg-load("cross.svg", fill= "#c92e2e") center center /
          contain no-repeat;
    }
    &:hover {
      color: rgb(65, 76, 99);
    }
  }
}

</style>