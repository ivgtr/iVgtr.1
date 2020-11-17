<template>
  <section class="skill mt-2">
    <h2>Skills</h2>
    <ul class="flex flex-wrap">
      <li
        v-for="(item, n) in badges"
        :key="item.id"
        class="text-white bg-gray-700 flex text-xs mt-1 mr-2 last:mr-0"
        :style="`animation-delay:${n * 0.1 + 1.0}s`"
      >
        <span class="inline-block h-full w-1" :class="item.color"></span>
        <p class="px-2">{{ item.name }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

const badges = [
  {
    name: 'Pro Twitter User',
    color: 'bg-blue-400'
  },
  {
    name: 'Vue/NuxtJS',
    color: 'bg-green-500'
  },
  {
    name: 'TypeScript',
    color: 'bg-blue-500'
  }
]

export default Vue.extend({
  data() {
    return {
      badges
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
    animation: slideIn 0.3s ease-in-out backwards;

    .deco {
      background: $gradation;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
