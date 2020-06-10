<template>
  <section class="description">
    <h2>Profiles</h2>
    <p>🎂96/11/12</p>
    <p>Geeks who consume content.</p>
    <h2>Jobs</h2>
    <p>OTAKU.</p>
    <h2>Likes</h2>
    <p>Demon's Souls, FPS, Tea(Jasmine茶,GoGo茶)</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
p {
  &::before {
    content: '- ';
  }
}
</style>
