<template>
  <Layout>

    <h1 class="page-title">Viewing {{ numPosts }} in {{ title }} </h1>

    <PostCard v-for="{ node } in posts"
              :key="node.id"
              :post="node"/>

  </Layout>
</template>

<page-query>
query Category($path: String, $page: Int) {
  taxonomny: wordPressPostTag(path: $path) {
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
import taxonomy from '~/mixins/taxonomy'

export default {
  extends: taxonomy
}
</script>
