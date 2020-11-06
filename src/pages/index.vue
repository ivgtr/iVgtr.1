<template>
  <main class="main rounded flex items-center justify-center">
    <div
      class="flex flex-wrap items-center justify-center flex-col sm:flex-row"
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
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background: #fcfcf3;
}
</style>
