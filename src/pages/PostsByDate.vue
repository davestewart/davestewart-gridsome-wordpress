<template>
  <Layout>
    <template slot="sidebar">
      <CatalogWidget/>
    </template>

    <div class="card">
      <h1 class="entry-title">Posts by Date</h1>
      <div class="entry-content">
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
        date: date (format: "YYYY/MM/DD")
        dateHuman: date (format: "ddd Do MMM YYYY")
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
import CatalogWidget from '../components/widgets/CatalogWidget'
import { sortBy } from '../utils/collection'

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
    posts () {
      return this.$page.posts
        .edges.map(edge => edge.node)
        .sort(sortBy('year', false))
    },

    children () {
      // variables
      const options = this.$option('postsBy.date', {})
      const groups = []
      let group

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
        const include = options.filter
          ? post.categories.some(category => options.filter.includes(category.slug))
          : true
        if (include) {
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
