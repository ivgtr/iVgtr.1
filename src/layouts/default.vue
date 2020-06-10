<template>
  <div class="root grid items-center overflow-hidden">
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {}
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/styles.scss';

.root {
  position: relative;
  justify-items: center;
  width: 100%;
  height: 100vh;
  background: no-repeat center center/300% 300%
    linear-gradient(130deg, #1cc6b8, #3f3f94, #ec2757, #fcfc67, #eb6d71);
}
</style>
