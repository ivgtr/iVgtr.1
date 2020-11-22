<template>
  <div
    class="wrapper rounded flex items-center justify-center mx-2 my-2 py-16 px-16"
  >
    <div class="text-center">
      <p>Page Not Found</p>
      <button
        class="inline-block mt-8 text-blue-200 font-bold"
        @click="onClick"
      >
        &lt;&lt;&nbsp;家に帰ろう
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    onClick() {
      if (this.$route.path === '/') {
        location.reload()
      } else {
        this.$router.push('/')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fcfcf3;
}
</style>
