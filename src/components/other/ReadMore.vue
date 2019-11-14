<template>
  <g-link class="read-more" :to="post.path">
    <span class="text">Read More</span>
    <span class="meta" v-html="readingTime"/>
  </g-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    readingTime() {
      const wordsCountApprox = this.post.content.split(' ').filter((e) => e.length > 2).length
      const timeInMins = Math.round(wordsCountApprox/200)
      return ` &asymp;${Math.max(1, timeInMins)}min`
    }
  }
}
</script>
