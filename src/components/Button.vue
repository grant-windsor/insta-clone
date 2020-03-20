<template>
<vButton :class="{following: isFollowing}" @click="isFollowing = !isFollowing">
  <slot></slot>
</vButton>
</template>

<script>
export default {
  data: function() {
    return {
      isFollowing: false
    }
  }
}
</script>

<style scoped>
.vButton {
  color: black;
}
</style>
