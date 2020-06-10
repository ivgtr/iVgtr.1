<template>
  <section class="link">
    <h2>Links</h2>
    <ul class="flex mt-2">
      <li
        v-for="l in links"
        :key="l.id"
        class="rounded-full h-8 w-8 flex items-center justify-center ml-2 first:ml-0"
      >
        <a
          :href="l.link"
          target="_brank"
          class="rounded-full flex items-center justify-center w-full h-full hover:text-white"
          :class="l.color"
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
  color: string
}
export default Vue.extend({
  data(): dataTypes {
    return {
      links: [
        {
          icon: ['fab', 'twitter'],
          link: 'https://twitter.com/mawaru_hana',
          color: 'hover:bg-blue-500'
        },
        {
          icon: ['fab', 'steam'],
          link: 'https://steamcommunity.com/id/neohgear',
          color: 'hover:bg-gray-800'
        },
        {
          icon: ['fab', 'github'],
          link: 'https://github.com/ivgtr',
          color: 'hover:bg-gray-700'
        },
        {
          icon: ['fab', 'amazon'],
          link:
            'https://www.amazon.jp/hz/wishlist/ls/9DPH37UTXZTP?ref_=wl_share',
          color: 'hover:bg-yellow-400'
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
    & > a {
      transition: all 0.1s ease-in;
    }
  }
}
</style>
