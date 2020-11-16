<template>
  <article class="profile m-3 mt-5 sm:mt-3 box-border sm:ml-16 max-w-xs">
    <ProfileName />
    <ProfileDescription />
    <ProfileSkill />
    <ProfileLink />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      long: false
    }
  },
  methods: {
    onClick() {
      this.long = !this.long
    }
  }
})
</script>
