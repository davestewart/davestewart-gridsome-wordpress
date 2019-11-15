<template>
  <Layout>
    <template slot="sidebar">
      <LinkWidget title="All posts" :nodes="links"/>
      <PaginationWidget :pages="this.$page.taxonomy.belongsTo.pageInfo.totalPages"/>
    </template>

    <h1 class="page-title">Viewing {{ numPosts }} in {{ title }} </h1>

    <PostCard v-for="{ node } in posts"
              :key="node.id"
              :post="node"/>

  </Layout>
</template>

<page-query>
query Category($path: String, $page: Int) {
  taxonomy: wordPressPostTag(path: $path) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            date
            id
            path
            title
            excerpt
            content
    				format
            categories {
              id
              title
              path
            }
            tags {
              slug
              path
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import LinkWidget, { item } from '../components/widgets/LinkWidget'
import PaginationWidget from '../components/widgets/PaginationWidget'
import taxonomy from '~/mixins/taxonomy'

export default {
  extends: taxonomy,

  components: {
    LinkWidget,
    PaginationWidget,
  },

  computed: {
    links () {
      return this.posts.map(post => item(post.node.title, post.node.path))
    },
  }
}
</script>
