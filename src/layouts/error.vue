<template>
  <div
    class="rounded flex items-center justify-center mx-2 my-2 py-16 sm:py-8 px-4 sm:px-16"
  >
    <div class="wrapper text-center">
      <p>Page Not Found</p>
      <nuxt-link class="inline-block mt-8 text-blue-200 font-bold" to="/"
        >&lt;&lt;&nbsp;家に帰ろう
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
div {
  background: #fcfcf3;
}
</style>
