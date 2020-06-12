<template>
  <section class="name">
    <h2 class="text-3xl text-gray-700">
      <span class="deco text-2xl mr-1">@</span>ivgtr
    </h2>
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
.deco {
  background: $gradation;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
