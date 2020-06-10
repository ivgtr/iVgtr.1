<template>
  <div class="icon">
    <div class="icon_inner">
      <!-- <img :src="require('~/assets/images/common/icon.jpg')" alt="icon" /> -->
      <img :src="require('~/assets/images/common/dicon.jpg')" alt="icon" />
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
    width: 100px;
    height: 100px;
    background: #fff;
    background-size: cover;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0 0 0 3px #fff;
      object-fit: contain;
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
