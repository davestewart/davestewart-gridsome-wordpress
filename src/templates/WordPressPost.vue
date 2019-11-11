<template>
  <Layout>

    <template slot="sidebar">
      <RelatedItems/>
    </template>

    <Post :post="$page.post" />

  </Layout>
</template>

<page-query>
fragment postFields on WordPressPost {
  title
  date
  content
  format
  # featuredMedia {
  #   sourceUrl
  #   altText
  #   mediaDetails {
  #     width
  #     height
  #   }
  # }
  categories {
    id
    title
    path
    slug
  }
  tags {
    id
    title
    path
    slug
    count
  }
  author {
    name
    path
  }
}

query Post($path: String!) {
  post: wordPressPost(path: $path) {
    ...postFields
  }
}
</page-query>

<script>
import Post from '~/components/posts/Post.vue'

export default {
  components: {
    Post
  },

  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: 'single'
      }
    }
  },
}
</script>
