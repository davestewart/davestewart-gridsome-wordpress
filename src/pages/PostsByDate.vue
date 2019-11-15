<template>
  <Layout>
    <div class="card">
      <h1 class="entry-title">Posts by Date</h1>
      <div class="entry-content">
        <p>A selection of some of the best commercial and open source work from over the years.</p>
        <PostRoot :children="children"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query PostsByDate {
  posts: allWordPressPost (sortBy: "date") {
    edges {
      node {
        title
        excerpt
        path
        year: date (format: "YYYY")
        date: date (format: "ddd Do MMM YYYY")
        categories {
          slug
        }
      }
    }
  }
}
</page-query>

<script>
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
    posts () {
      return this.$page.posts.edges.map(edge => edge.node)
    },

    children () {
      // variables
      let group
      const groups = []

      // loop over all groups
      for (let post of this.posts) {
        // new group
        if (!group || post.year !== group.title) {
          if (group && group.children.length) {
            groups.push(group)
          }
          group = {
            title: post.year,
            children: []
          }
        }

        // add to group
        if (post.categories.some(category => /work|play/.test(category.slug))) {
          group.children.push(post)
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
