<template>
  <section class="skills">
    <h2>Skills</h2>
    <ul class="flex flex-wrap">
      <li
        v-for="(l, n) in chips"
        :key="l.id"
        class="text-white bg-gray-700 flex text-xs ml-2 mt-1 "
        :style="`animation-delay:${n * 0.1 + 1.0}s`"
      >
        <span class="inline-block h-full w-1" :class="l.color"></span>
        <p class="px-2">{{ l.name }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      chips: [
        {
          name: 'TypeScript',
          color: 'bg-blue-500'
        },
        {
          name: 'Vue/Nuxt',
          color: 'bg-green-500'
        },
        {
          name: 'Pro Twitter User',
          color: 'bg-blue-400'
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
