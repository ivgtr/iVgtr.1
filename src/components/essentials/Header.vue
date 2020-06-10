<template>
  <header id="header" class="mt-8">
    <h1>
      <Logo />
    </h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/essentials/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  }
})
</script>

<style lang="scss">
#header {
  position: relative;
  z-index: 2;
  width: 100%;
  & > h1 {
    width: 90px;
    transform: translateX(calc(50vw - 45px));
  }
}
</style>
