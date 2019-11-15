<template>
  <LinkWidget title="Pagination" :nodes="links" />
</template>

<script>
import LinkWidget, { item } from './LinkWidget'

export default {
  components: {
    LinkWidget
  },

  props: {
    path: Number,
    pages: Number,
  },

  computed: {
    links () {
      const path = this.path || this.$route.path.replace(/\/\d+/, '')
      const items = []
      for (let i = 0; i < this.pages; i++) {
        const page = i + 1
        const link = page > 1
          ? `${path}/${page}`
          : path
        items.push(item(`Page ${page}`, link))
      }
      return items
    }
  }
}
</script>
