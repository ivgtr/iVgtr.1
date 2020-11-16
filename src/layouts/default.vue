<template>
  <div class="root relative grid items-center overflow-hidden">
    <main class="main w-full h-full rounded flex items-center justify-center">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.root {
  justify-items: center;
  width: 100%;
  min-height: 100vh;
  background: no-repeat center center/300% 300%
    linear-gradient(130deg, #1cc6b8, #3f3f94, #ec2757, #fcfc67, #eb6d71);
}
/* stylelint-disable */
_::-webkit-full-page-media,
_:future,
:root .root {
  min-height: -webkit-fill-available;
}
/* stylelint-enable */
</style>
