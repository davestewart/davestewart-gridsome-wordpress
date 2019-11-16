<template>
  <Layout class="page-home" :sidebar="false">
    <PostGrid :posts="posts">
      <PostGridIntro :post="$page.intro"></PostGridIntro>
    </PostGrid>
  </Layout>
</template>

<page-query>
query featured {
  intro: wordPressPage(path: "/pages/intro") {
    title
    content
  }

  featured: allWordPressPostTag (filter: { slug: {eq: "featured" } }) {
    edges {
      node {
        belongsTo {
          edges {
            node {
              ... on WordPressPost {
                date
                title
                path
                excerpt
                categories {
                  title
                  path
                }
                featuredMedia {
                  sourceUrl
                  mediaDetails {
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostGrid from '~/components/posts/PostGrid.vue'
import PostGridIntro from '~/components/posts/PostGridIntro.vue'

export default {
  components: {
    PostGrid,
    PostGridIntro,
  },

  metaInfo: {
    title: 'Featured Posts'
  },

  computed: {
    root () {
      return this.$page.featured.edges[0].node
    },

    posts () {
      return this.root.belongsTo.edges
        .sort(() => Math.random() > .5 ? 1 : -1)
    }
  },
}
</script>
