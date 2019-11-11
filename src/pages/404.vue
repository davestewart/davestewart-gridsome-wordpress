<template>
  <Layout :sidebar="false">
    <div class="post type-post hentry ">
      <h2 class="entry-title">Ooops - I couldn't find that content!</h2>
      <div class="entry-content">
        <p>Here's a picture of a DJing cat instead.</p>
        <img width="580" height="360" style="margin-bottom: 1rem;" src="/assets/images/dj-cat.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image">
        <p>Click <g-link to="/">here</g-link> to go back to the home page...</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404!',
    bodyAttrs: {
      class: 'archive page-404'
    }
  }
}
</script>
