<template>
  <section class="link">
    <h2>Links</h2>
    <ul class="flex mt-2">
      <li
        v-for="l in links"
        :key="l.id"
        class="rounded-full h-8 w-8 flex items-center justify-center ml-2 first:ml-0"
      >
        <a :href="l.link" target="_brank"
          ><font-awesome-icon :icon="l.icon"
        /></a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
type dataTypes = {
  links: links[]
}
type links = {
  icon: string[]
  link: string
}
export default Vue.extend({
  data(): dataTypes {
    return {
      links: [
        {
          icon: ['fab', 'twitter'],
          link: ''
        },
        {
          icon: ['fab', 'steam'],
          link: ''
        },
        {
          icon: ['fab', 'github'],
          link: ''
        },
        {
          icon: ['fab', 'amazon'],
          link: ''
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
ul {
  position: relative;
  z-index: 5;
  li {
    position: relative;
    background: #fcfcf3;
    &::after {
      position: absolute;
      top: -1px;
      left: -1px;
      z-index: -1;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      content: '';
      background: $gradation;
      border-radius: 50%;
    }
  }
}
</style>
