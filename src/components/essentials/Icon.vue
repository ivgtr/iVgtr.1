<template>
  <div class="icon">
    <div class="icon_inner">
      <img
        src="https://lh3.googleusercontent.com/OSx52ADl3DL4RkhYvxcZzLu69Y5eytlmgqMm3izAXxZQ9k0mEF34Q8iQlgGKJYLrpdCJGSCvlNi0IMeUu0-oCWHl-cpSM0Uyxdhr3b_UdXGHIu4uDV8PpbiAsRtSlAxyNSjvyLEb7g"
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
    overflow: hidden;
    background: #fff;
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: scaleIn 0.3s ease-in 0.1s backwards;
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
