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
      // re-parent nodes to their parents
      function reParent (child) {
        // find this child's parent
        const parent = parents[child.parentId]

        // if adding a group to a parent group, and strict mode is on, remove posts from parent group
        if (parent && child.children && options.strict) {
          parent.children = parent.children.filter(child => child.children)
        }

        // add child to parent if not already
        if (parent && !parent.children.includes(child)) {
          parent.children.push(child)
        }

        // process all children
        if (child.children) {
          child.children.forEach(reParent)
        }
      }

      // filter out nodes with no children
      function clean (child) {
        if (child.children) {
          child.children = child.children
            .map(clean)
            .filter(child => !child.children || child.children.length > 0)
        }
        return child
      }

      // options
      const options = this.$option('postsBy.category', {})

      // variables
      const categories = this.categories

      // create parent lookup for attaching children
      const parents = categories.reduce((output, input) => {
        output[input.id] = input
        return output
      }, {})

      // determine children
      const children = options.categories
        ? options.categories
          .map(slug => getItem(categories, 'slug', slug))
          .filter(category => category)
        : categories
          .filter(category => category.parentId === 0)

      // reset root children
      // children.forEach(category => category.children = [])

      // re-parent categories
      categories.forEach(reParent)

      // filter and return
      return clean({ children }).children
    }
  }
}
</script>
