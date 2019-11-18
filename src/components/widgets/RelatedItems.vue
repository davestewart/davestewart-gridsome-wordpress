<template>

  <div>
    <LinkWidget title="Related categories" :nodes="categories" />
    <LinkWidget v-if="posts.length"
            :title="type === 'category' ? `Posts in ${resource.title}` : 'Related posts'"
            :nodes="posts" />
  </div>

</template>

<static-query>
query Related {
  categories: allWordPressCategory (sortBy: "title", order: ASC) {
    edges {
      node {
        slug
        path
				title
        belongsTo {
          totalCount
        }
      }
    }
  }

	posts: allWordPressPost {
    edges {
      node {
        slug
        path
        title
        date
        categories {
          parentId
          slug
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import LinkWidget from './LinkWidget'

import { sortBy } from '~/utils/collection'

function clone (value) {
  return JSON.parse(JSON.stringify(value))
}

export default {
  components: {
    LinkWidget
  },

  props: {
    path: String,
    level: Number
  },

  computed: {
    segments () {
      return this.$route.path.match(/[^\/]+/g)
    },

    type () {
      return this.segments[0]
    },

    slug () {
      return this.segments[1]
    },

    resource () {
      if (this.type === 'category') {
        return this.allCategories.find(item => item.slug === this.slug)
      }

      if (this.type === 'post') {
        return this.allPosts.find(item => item.slug === this.slug)
      }

      return {}
    },

    allCategories () {
      return clone(this.$static.categories.edges)
        .map(edge => {
          const node = edge.node
          return {
            id: node.id,
            parentId: node.parentId,
            slug: node.slug,
            path: node.path,
            title: node.title,
            count: node.belongsTo.totalCount,
          }
        })
        .sort(sortBy('parentId', true))
    },

    allPosts () {
      return clone(this.$static.posts.edges)
        .map(edge => {
          const node = edge.node
          node.categories = node.categories
            .sort(sortBy('parentId', true))
            .map(item => {
              return {...item}
            })
          return node
        })
    },

    categories () {
      let { type, slug } = this
      const categories = this.allCategories

      if (type === 'post') {
        const post = this.allPosts.find(item => item.slug === slug)
        slug = post.categories.map(category => category).pop().slug
        type = 'category'
      }

      if (type === 'category') {
        const root = categories.find(item => item.slug === slug)
        const title = root.title.match(/^\w+/)
        const rx = new RegExp(`^${String(title)}\\b`)
        return categories.filter(item => rx.test(item.title))
      }

      return []
    },

    posts () {
      let { type } = this
      const posts = this.allPosts
      if (type === 'post') {
        const category = this.resource.categories[1]
        if (category) {
          const title = category.title
          return posts.filter(post => {
            const titles = post
              .categories
              .map(item => item.title)
            return titles.includes(title)
          })
        }
      }
      return []
    }
  }
}

</script>
