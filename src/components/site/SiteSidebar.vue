<template>
  <div v-sticky="{ stickyTop: this.top }">
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import VueSticky from 'vue-sticky'

export default {
  directives: {
    sticky: VueSticky,
  },

  props: {
    top: {
      type: Number,
      default: 40,
    },
  },

}
</script>
