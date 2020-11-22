<template>
  <div
    class="icon relative z-30 grid items-center justify-items-center mx-auto"
  >
    <div
      class="icon_inner relative box-border overflow-hidden bg-white bg-cover"
    >
      <img
        v-lazy-load
        :data-src="require('~/assets/images/essentials/icon.jpg')"
        :src="require('~/assets/images/essentials/thum_icon.jpg')"
        alt="icon"
        rel="preload"
        class="w-full h-full object-contain"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.icon {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  &_inner {
    width: 100px;
    height: 100px;
    padding: 3px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #fff inset;
    img {
      border-radius: 50%;
      animation: scaleInDown 0.3s ease-in-out 0.1s backwards;
    }
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }
  &::before {
    bottom: -4px;
    left: -18px;
    z-index: -1;
    width: 98%;
    height: 98%;
    background: $gradation;
  }
  &::after {
    bottom: 8px;
    left: 20px;
    z-index: -2;
    width: 100%;
    height: 100%;
    background: #1cc6b8;
    background: repeating-linear-gradient(
      135deg,
      #1cc6b8 0,
      #1cc6b8 12px,
      #fff0 12px,
      #fff0 24px
    );
  }
}
</style>
