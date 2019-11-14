<template>
  <Layout>
    <PostText :post="node" v-for="{ node } in posts" :key="node.id"/>
  </Layout>
</template>

<page-query>
query tell {
  taxonomy: wordPressCategory (path: "/category/tell") {
    belongsTo {
      edges {
        node {
          ... on WordPressPost {
            id
            title
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostText from '../components/posts/PostText.vue'

export default {
  components: {
    PostText,
  },

  metaInfo: {
    title: 'Tell',
    bodyAttrs: {
      class: 'layout__archive',
    }
  },

  computed: {
    posts () {
      return this.$page.taxonomy.belongsTo.edges
    }
  }
}
</script>
