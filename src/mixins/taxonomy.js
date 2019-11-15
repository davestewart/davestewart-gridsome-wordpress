import PostCard from '~/components/posts/PostCard.vue'

export default {
  components: {
    PostCard,
  },

  metaInfo () {
    return {
      title: this.$page.taxonomy.title,
      bodyAttrs: {
        class: 'layout__archive'
      },
    }
  },

  computed: {
    title () {
      return this.$page.taxonomy.title
    },

    total () {
      return this.$page.taxonomy.belongsTo.totalCount
    },

    pageInfo () {
      return this.$page.taxonomy.belongsTo.pageInfo
    },

    posts () {
      return this.$page.taxonomy.belongsTo.edges
    },

    numPosts () {
      const count = this.posts.length
      return count + (count === 1 ? ' post' : ' posts')
    }
  }
}
