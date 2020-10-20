<template>
  <section class="link">
    <h2>Links</h2>
    <ul class="flex mt-2">
      <li
        v-for="(item, n) in link"
        :key="item.id"
        class="rounded-full h-8 w-8 flex items-center justify-center ml-2 first:ml-0 box-border border border-pink-500 border-solid"
        :style="`animation-delay:${n * 0.05 + 1.2}s`"
      >
        <a
          :href="item.link"
          target="_brank"
          class="rounded-full flex items-center justify-center w-full h-full hover:text-white"
          :class="item.color"
          :aria-label="item.title"
          ><font-awesome-icon :icon="item.icon"
        /></a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
type localData = {
  link: link[]
}
type link = {
  icon: string[]
  title: string
  link: string
  color: string
}
export default Vue.extend({
  data(): localData {
    return {
      link: [
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
          link: 'https://amz.run/3WX9',
          color: 'hover:bg-yellow-400'
        },
        {
          icon: ['fas', 'coffee'],
          title: '古事記Donate',
          link: 'https://www.buymeacoffee.com/ivgtr',
          color: 'hover:bg-orange-800'
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
    animation: scaleIn 0.4s ease-in-out backwards;
    & > a {
      transition: all 0.1s ease-in 0.05s;
    }
  }
}
</style>
