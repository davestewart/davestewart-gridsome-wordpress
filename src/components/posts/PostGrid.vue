<template>
  <div class="isotope-container" ref="grid">
    <slot></slot>
    <PostGridItem v-for="({ node }, index) in posts"
                  :key="node.id"
                  :data-index="index"
                  :post="node"
                  @load="layout"
    />
  </div>
</template>

<script>
import debounce from 'debounce'
import PostGridItem from '~/components/posts/PostGridItem.vue'

export default {
  components: {
    PostGridItem,
  },

  props: {
    posts: Array,
  },

  watch: {
    posts: 'layout'
  },

  mounted () {
    if (process.isClient) {
      const Isotope = require('isotope-layout')
      const grid = this.$refs.grid
      this.iso = new Isotope(grid, {
        itemSelector: '.post',
        transformsEnabled: false,
        transitionDuration: 0,
        sortBy: 'order',
        getSortData: {
          order: (item) => {
            if (item.id === 'intro') {
              return 0
            }
            return Math.random() * this.posts.length
          }
        }
      })
      this.iso.layout()
    }
  },

  methods: {
    layout: debounce (function () {
      if (process.isClient) {
        console.log('grid item loaded')
        this.iso && this.iso.layout()
      }
    }, 50)
  }
}
</script>
