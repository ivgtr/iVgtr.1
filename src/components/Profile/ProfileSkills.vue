<template>
  <section class="skills">
    <h2>Skills</h2>
    <ul class="flex flex-wrap">
      <li
        v-for="l in chips"
        :key="l.id"
        class="text-white bg-gray-700 flex text-xs ml-2 mt-1 "
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
.deco {
  background: $gradation;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
