<template>
  <section class="link mt-2">
    <h2>Links</h2>
    <ul class="flex flex-wrap">
      <li
        v-for="(item, n) in link"
        :key="item.id"
        class="relative rounded-full h-8 w-8 flex items-center justify-center mt-2 mr-2 last:mr-0 box-border border border-pink-500 border-solid"
        :style="`animation-delay:${n * 0.05 + 1.2}s`"
      >
        <a
          :href="item.link"
          target="_brank"
          class="rounded-full flex items-center justify-center w-full h-full hover:text-white overflow-hidden"
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

const link = [
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
    title: 'buymeacoffee',
    link: 'https://www.buymeacoffee.com/ivgtr',
    color: 'hover:bg-orange-800'
  }
]

export default Vue.extend({
  data() {
    return {
      link
    }
  }
})
</script>

<style lang="scss" scoped>
h2 {
  animation: slideIn 0.3s ease-in-out 0.4s backwards;
}
ul {
  li {
    background: #fcfcf3;
    animation: scaleIn 0.4s ease-in-out backwards;
    & > a {
      &:hover {
        transition: color 0.1s ease-in, transform 0.25s ease-in;
        transform: rotate(15deg);
        svg {
          transition: transform 0.2s ease-in;
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
