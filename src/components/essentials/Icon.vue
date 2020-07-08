<template>
  <div class="icon">
    <div class="icon_inner relative">
      <img
        :src="require('~/assets/images/icon.jpg')"
        alt="icon"
        rel="preload"
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
  position: relative;
  z-index: 5;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  border-radius: 50%;
  &_inner {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 3px;
    overflow: hidden;
    background: #fff;
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #fff inset;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
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
