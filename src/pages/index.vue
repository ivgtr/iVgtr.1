<template>
  <main class="main w-full h-full rounded flex items-center justify-center">
    <div
      class="rounded flex flex-wrap items-center justify-center flex-col sm:flex-row py-16 sm:py-8 mx-2 my-2 sm:px-16"
    >
      <Icon />
      <Profile />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.main {
  div {
    background: #fcfcf3;
  }
}
</style>
