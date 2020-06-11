<template>
  <div class="root grid items-center overflow-hidden">
    <nuxt v-if="load" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type dataType = {
  load: boolean
}
export default Vue.extend({
  data(): dataType {
    return {
      load: false
    }
  },
  mounted(): void {
    const img = document.createElement('img')
    img.src =
      'https://lh3.googleusercontent.com/OSx52ADl3DL4RkhYvxcZzLu69Y5eytlmgqMm3izAXxZQ9k0mEF34Q8iQlgGKJYLrpdCJGSCvlNi0IMeUu0-oCWHl-cpSM0Uyxdhr3b_UdXGHIu4uDV8PpbiAsRtSlAxyNSjvyLEb7g'
    this.load = true
  }
})
</script>

<style lang="scss" scoped>
.root {
  position: relative;
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
