<template>
  <section class="link">
    <h2>Links</h2>
    <ul class="flex mt-2">
      <li
        v-for="(l, n) in links"
        :key="l.id"
        class="rounded-full h-8 w-8 flex items-center justify-center ml-2 first:ml-0 box-border border border-pink-500 border-solid"
        :style="`animation-delay:${n * 0.05 + 1.2}s`"
      >
        <a
          :href="l.link"
          target="_brank"
          class="rounded-full flex items-center justify-center w-full h-full hover:text-white"
          :class="l.color"
          :aria-label="l.title"
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
  title: string
  link: string
  color: string
}
export default Vue.extend({
  data(): dataTypes {
    return {
      links: [
        {
          icon: ['fab', 'twitter'],
          title: 'Twitter',
          link: 'https://twitter.com/mawaru_hana',
          color: 'hover:bg-blue-500'
        },
        {
          icon: ['fas', 'blog'],
          title: 'blog',
          link: 'https://ivgtr.hatenablog.jp/',
          color: 'hover:bg-blue-800'
        },
        {
          icon: ['fab', 'steam'],
          title: 'Steam',
          link: 'https://steamcommunity.com/id/neohgear',
          color: 'hover:bg-gray-800'
        },
        {
          icon: ['fab', 'github'],
          title: 'Github',
          link: 'https://github.com/ivgtr',
          color: 'hover:bg-gray-700'
        },
        {
          icon: ['fab', 'amazon'],
          title: '欲しい物リスト',
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
h2 {
  animation: slideIn 0.3s ease-in-out 0.4s backwards;
}
ul {
  position: relative;
  z-index: 5;
  li {
    position: relative;
    background: #fcfcf3;
    transition: all 0.1s ease-in 0.05;
    animation: scaleIn 0.3s ease-in-out backwards;
  }
}
</style>
