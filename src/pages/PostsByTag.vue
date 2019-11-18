<template>
  <Layout>
    <template slot="sidebar">
      <CatalogWidget/>
    </template>

    <div class="card">
      <h1 class="entry-title">Posts by Tag</h1>
      <div class="entry-content">
        <PostRoot class="posts-by-tag" :children="children"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query TagsByCount {
  tags: allWordPressPostTag (
    sort: { by: "count", order: DESC },
    filter: { count: { gt: 0 } }
  ) {
    edges {
      node {
        count
        title
        path
        belongsTo {
          edges {
            node {
              ... on WordPressPost {
                title
                path
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
import CatalogWidget from '../components/widgets/CatalogWidget'
import { plural } from '../utils/text'
import PostRoot from '../components/hierarchy/PostRoot'

export default {
  components: {
    CatalogWidget,
    PostRoot,
  },

  metaInfo: {
    title: 'Posts By Date',
    bodyAttrs: {
      class: 'layout__archive',
    }
  },

  computed: {
    tags () {
      return this.$page.tags.edges.map(edge => edge.node)
    },

    children () {
      return this.tags.map(tag => {
        const links = tag.belongsTo.edges
          .map(edge => {
            const { title, path} = edge.node
            return `<a href="${path}">${title}</a>`
          })
        const html = links.length > 1
          ? `${links.slice(0, -1).join(', ')} and ${links.slice(-1)}`
          : links
        return {
          ...tag,
          excerpt: `<strong>${plural(tag.count, 'post')}</strong>: ${html}`
        }
      })
    }
  }
}
</script>

<style lang="scss">
.posts-by-tag {
  a {
    color: $color-grey;
    &:hover {
      color: $color-primary;
    }
  }
}
</style>
