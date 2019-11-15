<template>
  <Layout>
    <template slot="sidebar">
      <CatalogWidget/>
    </template>

    <div class="card">
      <h1 class="entry-title">Posts by Category</h1>
      <div class="entry-content">
        <PostRoot :children="children"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query PostByCategory {
  categories: allWordPressCategory {
    edges {
      node {
        id
        parentId
        slug
        path
        title,
        content,
        belongsTo {
          edges {
            node {
              ...on WordPressPost {
                title
                excerpt
                path
                date (format: "YYYY/MM/DD"),
                dateHuman: date (format: "ddd Do MMM YYYY"),
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
import PostRoot from '../components/hierarchy/PostRoot'
import CatalogWidget from '../components/widgets/CatalogWidget'
import { sortBy } from '../utils/collection'

function getItem (items, key, value) {
  return items.find(item => String(item[key]) === String(value))
}
export default {
  components: {
    CatalogWidget,
    PostRoot,
  },

  metaInfo: {
    title: 'Posts By Category',
    bodyAttrs: {
      class: 'layout__archive',
    }
  },

  computed: {
    categories () {
      return this.$page.categories.edges
        .map(edge => {
          const node = edge.node
          const category = {
            type: 'category',
            excerpt: node.content,
            ...edge.node,
            count: node.belongsTo.edges.length,
            children: node.belongsTo.edges.map(edge => {
              return {
                type: 'post',
                ...edge.node
              }
            })
          }
          delete category.belongsTo
          return category
        })
        .sort(sortBy('count', false))
    },

    children () {
      // variables
      const categories = this.categories
      const children = [
        getItem(categories, 'slug', 'work'),
        getItem(categories, 'slug', 'play'),
        getItem(categories, 'slug', 'blog'),
      ]

      // reset root children
      children.forEach(category => category.children = [])

      // cache parents for attaching children
      const parents = children.reduce((output, input) => {
        output[input.id] = input
        return output
      }, {})

      // re-parent categories
      for (let category of categories) {
        const parent = parents[category.parentId]
        if (parent) {
          parents[category.id] = category
          parent.children.push(category)
        }
      }

      // return
      return children
    }
  }
}
</script>
