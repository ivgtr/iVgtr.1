<template>
  <section class="description">
    <h2>Profiles</h2>
    <p style="animation-delay:0.8s">🎂96/11/12</p>
    <p style="animation-delay:0.85s">Geeks who consume content.</p>
    <h2>Jobs</h2>
    <p style="animation-delay:0.9s">OTAKU.</p>
    <h2>Likes</h2>
    <p style="animation-delay:0.95s">
      Demon's Souls, FPS, Tea(Jasmine茶,GoGo茶)
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
h2 {
  animation: slideIn 0.3s ease-in-out 0.4s backwards;
}
p {
  animation: slideIn 0.3s ease-in-out backwards;
  &::before {
    content: '- ';
  }
}
</style>
