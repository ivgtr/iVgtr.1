<template>
  <nuxt-link to="/" class="logo">
    <img :src="require('~/assets/images/common/logo.png')" alt="site_logo" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  width: 100%;
  margin: 5px 0 0 10px;
  img {
    width: 100%;
  }
}
</style>
