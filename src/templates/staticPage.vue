<template>
  <Layout :sidebar="false">
    <div class="page type-page card">
      <h1 class="entry-title">{{$page.page.title}}</h1>
      <div class="entry-content" v-html="content"/>
    </div>
  </Layout>
</template>

<page-query>
query($path: String) {
  page: wordPressPage(path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.page.title,
      bodyAttrs: {
        class: 'layout__page'
      }
    }
  },

  computed: {
    content () {
      return this.$page.page.content
        // convert links
        .replace(/"http:\/\/davestewart\.co\.uk\/\w+\/(.+?)\/?"/g, '/post/$1')
    }
  }
}
</script>
