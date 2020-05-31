<template lang="pug">
  .user
    .user__avatar.avatar
      img(src='../../../images/content/user.jpg').avatar__img

    .user__name Орлов Алексей

</template>


<script>
export default {
  
}
</script>


<style lang="postcss">

.user {
  font-size: 18px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;

  &__avatar {
    width: 44px;
    height: 44px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__name {
    line-height: 0;
  }
}

</style>