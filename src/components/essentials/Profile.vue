<template>
  <article class="profile m-3 mt-5 sm:mt-3 box-border sm:ml-16 max-w-xs">
    <Name />
    <Description />
    <Skills />
    <Link />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import Name from '~/components/Profile/ProfileName.vue'
import Description from '~/components/Profile/ProfileDescription.vue'
import Skills from '~/components/Profile/ProfileSkills.vue'
import Link from '~/components/Profile/ProfileLink.vue'

export default Vue.extend({
  components: {
    Name,
    Description,
    Skills,
    Link
  }
})
</script>
