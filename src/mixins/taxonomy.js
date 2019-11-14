import PostCard from '~/components/posts/PostCard.vue'

export default {
  components: {
    PostCard,
  },

  metaInfo () {
    return {
      title: this.$page.taxonomny.title,
      bodyAttrs: {
        class: 'layout__archive'
      },
    }
  },

  computed: {
    title () {
      return this.$page.taxonomny.title
    },

    total () {
      return this.$page.taxonomny.belongsTo.totalCount
    },

    pageInfo () {
      return this.$page.taxonomny.belongsTo.pageInfo
    },

    posts () {
      return this.$page.taxonomny.belongsTo.edges
    },

    numPosts () {
      const count = this.posts.length
      return count + (count === 1 ? ' post' : ' posts')
    }
  }
}
