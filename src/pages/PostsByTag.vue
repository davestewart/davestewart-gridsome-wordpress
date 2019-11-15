<template>
  <Layout>
    <div class="card">
      <h1 class="entry-title">Posts by Tag</h1>
      <div class="entry-content">
        <p>All posts, sorted by tag.</p>
        <PostRoot :children="children"/>
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
import { plural } from '../utils/text'
import PostRoot from '../components/hierarchy/PostRoot'

export default {
  components: {
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
        const titles = tag.belongsTo.edges.map(edge => edge.node.title)
        return {
          ...tag,
          excerpt: `<strong>${plural(tag.count, 'post')}</strong>: ${titles.join(', ')}`
        }
      })
      // variables
      let group
      const groups = []

      // loop over all groups
      for (let tag of this.tags) {
        // new group
        if (!group || tag.year !== group.title) {
          if (group && group.children.length) {
            groups.push(group)
          }
          group = {
            title: tag.year,
            children: []
          }
        }

        // add to group
        if (tag.categories.some(category => /work|play/.test(category.slug))) {
          group.children.push(tag)
        }
      }

      // add final group
      if (group.children.length) {
        groups.push(group)
      }

      // return
      return groups
    }
  }
}
</script>
