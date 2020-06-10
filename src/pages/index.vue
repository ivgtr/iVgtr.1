<template>
  <main class="main rounded flex items-center justify-center">
    <div class="wrapper flex items-center justify-center">
      <Icon />
      <Pro />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/essentials/Icon.vue'
import Pro from '~/components/essentials/Profile.vue'

export default Vue.extend({
  components: {
    Icon,
    Pro
  }
})
</script>

<style lang="scss" scoped>
.main {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background: #fcfcf3;
  .wrapper {
    flex-direction: column;
  }
}
</style>
